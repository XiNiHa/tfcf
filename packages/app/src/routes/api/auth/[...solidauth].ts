import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { SolidAuth } from "@solid-mediakit/auth";
import { useDB } from "~/server/db";
import {
	accounts,
	sessions,
	users,
	verificationTokens,
} from "~/server/db/schema/auth";

export const { GET, POST } = SolidAuth(async (event) => ({
	providers: [],
	adapter: DrizzleAdapter(useDB(), {
		usersTable: users,
		accountsTable: accounts,
		sessionsTable: sessions,
		verificationTokensTable: verificationTokens,
	}),
	basePath: "/api/auth",
}));
