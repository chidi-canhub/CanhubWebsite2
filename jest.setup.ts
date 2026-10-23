import "@testing-library/jest-dom";

import { TextDecoder, TextEncoder } from "node:util";

if (!globalThis.TextEncoder) {
  Object.defineProperty(globalThis, "TextEncoder", {
    value: TextEncoder,
    configurable: true,
  });
}

if (!globalThis.TextDecoder) {
  Object.defineProperty(globalThis, "TextDecoder", {
    value: TextDecoder,
    configurable: true,
  });
}

if (!globalThis.Headers) {
  class MockHeaders {
    private store = new Map<string, string>();

    constructor(init?: Record<string, string> | Headers | string) {
      if (init instanceof Headers) {
        for (const [key, value] of init.entries()) {
          this.store.set(key.toLowerCase(), value);
        }
        return;
      }

      if (typeof init === "string") {
        for (const pair of init.split("\r\n")) {
          const [key, ...rest] = pair.split(":");
          if (key && rest.length) {
            this.store.set(key.trim().toLowerCase(), rest.join(":").trim());
          }
        }
        return;
      }

      if (init) {
        for (const [key, value] of Object.entries(init)) {
          this.store.set(key.toLowerCase(), String(value));
        }
      }
    }

    get(name: string) {
      return this.store.get(name.toLowerCase()) ?? null;
    }

    set(name: string, value: string) {
      this.store.set(name.toLowerCase(), value);
      return this;
    }

    append(name: string, value: string) {
      const key = name.toLowerCase();
      const current = this.store.get(key);
      this.store.set(key, current ? `${current}, ${value}` : value);
      return this;
    }

    has(name: string) {
      return this.store.has(name.toLowerCase());
    }

    delete(name: string) {
      this.store.delete(name.toLowerCase());
      return this;
    }

    entries() {
      return this.store.entries();
    }

    forEach(cb: (value: string, key: string) => void) {
      for (const [key, value] of this.store.entries()) cb(value, key);
    }
  }

  Object.defineProperty(globalThis, "Headers", {
    value: MockHeaders,
    configurable: true,
  });
}

if (!globalThis.Request) {
  class MockRequest {
    url: string;
    method: string;
    headers: Headers;
    body: string | null;

    constructor(input: string | URL, init: RequestInit = {}) {
      this.url = typeof input === "string" ? input : input.toString();
      this.method = (init.method ?? "GET").toUpperCase();
      this.headers = new Headers(init.headers as Record<string, string> | Headers | undefined);
      this.body = typeof init.body === "string" ? init.body : null;
    }

    async json() {
      if (!this.body) {
        return null;
      }
      return JSON.parse(this.body);
    }
  }

  Object.defineProperty(globalThis, "Request", {
    value: MockRequest,
    configurable: true,
  });
}

if (!globalThis.Response) {
  class MockResponse {
    headers: Headers;
    status: number;
    statusText: string;
    ok: boolean;
    type: ResponseType;
    url: string;
    body: string | null;
    bodyUsed: boolean;

    constructor(body?: BodyInit | null, init: ResponseInit = {}) {
      this.headers = new Headers(init.headers as Record<string, string> | Headers | undefined);
      this.status = init.status ?? 200;
      this.statusText = init.statusText ?? "OK";
      this.ok = this.status >= 200 && this.status < 300;
      this.type = "default";
      this.url = "";
      this.body = body == null ? null : typeof body === "string" ? body : String(body);
      this.bodyUsed = false;

      if (typeof body === "string") {
        this.headers.set("content-type", "text/plain;charset=UTF-8");
      }
    }

    async text() {
      if (this.bodyUsed) {
        throw new Error("Body has already been used");
      }
      this.bodyUsed = true;
      return this.body ?? "";
    }

    async json() {
      const raw = await this.text();
      return JSON.parse(raw || "null");
    }

    static json(body: unknown, init?: ResponseInit) {
      const jsonBody = JSON.stringify(body);
      return new MockResponse(jsonBody, {
        ...init,
        headers: {
          ...((init && init.headers) || {}),
          "content-type": "application/json; charset=utf-8",
        },
      });
    }
  }

  Object.defineProperty(globalThis, "Response", {
    value: MockResponse,
    configurable: true,
  });
}
