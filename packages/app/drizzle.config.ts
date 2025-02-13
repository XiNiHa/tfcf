import "@dotenvx/dotenvx/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/server/db/schema",
	dialect: "sqlite",
});
