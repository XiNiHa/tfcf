import * as v from "valibot";
import { serverScheme } from "./schema";

const env = v.safeParse(serverScheme, process.env);

if (env.success === false) {
	console.error(
		"❌ Invalid environment variables:\n",
		v.flatten(env.issues).nested,
	);
	throw new Error("Invalid environment variables");
}

export const serverEnv = env.output;
