import { drizzle } from "drizzle-orm/d1";
import { getRequestEvent } from "solid-js/web";
import * as authSchema from "./schema/auth";

export const useDB = () => {
	const db = getRequestEvent()?.nativeEvent?.context.cloudflare.env.DB;
	if (!db) throw new Error("Database not found");
	return drizzle(db, {
		schema: {
			...authSchema,
		},
	});
};
