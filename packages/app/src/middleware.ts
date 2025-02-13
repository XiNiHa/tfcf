import { createMiddleware } from "@solidjs/start/middleware";
import type { CloudflareEnv } from "./types";

export default createMiddleware({
	onRequest: [
		async (event) => {
			if (import.meta.env.PROD) return;

			const { getPlatformProxy } = await import("wrangler");
			const proxy = await getPlatformProxy();
			event.nativeEvent.context.cf = proxy.cf;
			event.nativeEvent.context.cloudflare = {
				env: proxy.env as unknown as CloudflareEnv,
				context: proxy.ctx,
			};
		},
	],
});
