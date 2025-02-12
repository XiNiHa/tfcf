import * as v from "valibot";
import { clientScheme } from "./schema";

const env = v.safeParse(clientScheme, import.meta.env);

if (env.success === false) {
	console.error(
		"❌ Invalid environment variables:\n",
		v.flatten(env.issues).nested,
	);
	throw new Error("Invalid environment variables");
}

export const clientEnv = env.output;
