import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds?: number;
  remaining?: number;
};

export async function checkRateLimit(identifier: string): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  try {
    const redis = new Redis({ url, token });
    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 5), "60 s"),
      analytics: false,
      prefix: "canhub:contact",
    });

    const result = await ratelimit.limit(`ip:${identifier}`);
    const retryAfterSeconds = result.success
      ? 0
      : Math.max(0, Math.ceil((Number(result.reset) - Date.now()) / 1000));

    return {
      allowed: result.success,
      retryAfterSeconds,
      remaining: result.remaining,
    };
  } catch {
    return null;
  }
}
