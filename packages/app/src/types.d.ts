import type { D1Database } from "@cloudflare/workers-types";
import type { PlatformProxy } from "wrangler";

export interface CloudflareEnv {
	DB: D1Database;
}

declare module "vinxi/http" {
	interface H3EventContext {
		cf: PlatformProxy["cf"];
		cloudflare: {
			env: CloudflareEnv;
			context: PlatformProxy["ctx"];
		};
	}
}
