import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Vercel: use Nitro output (see https://vercel.com/docs/frameworks/full-stack/tanstack-start).
// Cloudflare Workers build is default on Lovable, but for Vercel we output to .vercel/output.
const isVercelBuild =
  Boolean(process.env.VERCEL && process.env.VERCEL !== "0") ||
  Boolean(process.env.VERCEL_URL) ||
  process.env.NITRO_PRESET === "vercel" ||
  process.env.npm_lifecycle_event === "build:vercel";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  cloudflare: isVercelBuild ? false : undefined,
  plugins: isVercelBuild ? [nitro({ preset: "vercel" })] : [],
});
