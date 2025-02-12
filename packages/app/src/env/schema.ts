import * as v from "valibot";

export const serverScheme = v.object({
	NODE_ENV: v.fallback(
		v.picklist(["development", "production", "test"]),
		"development",
	),
	DISCORD_ID: v.string(),
	DISCORD_SECRET: v.string(),
	AUTH_SECRET: v.string(),
	AUTH_TRUST_HOST: v.optional(v.string()),
	AUTH_URL: v.optional(v.string()),
});

export const clientScheme = v.object({
	MODE: v.fallback(
		v.picklist(["development", "production", "test"]),
		"development",
	),
});
