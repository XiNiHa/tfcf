import type { AdapterAccountType } from "@auth/core/adapters";
import { relations } from "drizzle-orm";
import * as d from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";

export const users = d.sqliteTable("users", {
	id: d
		.text("id")
		.primaryKey()
		.$defaultFn(() => uuidv7()),
	name: d.text("name"),
	email: d.text("email").unique(),
	emailVerified: d.integer("email_verified", { mode: "timestamp_ms" }),
	image: d.text("image"),
});

export const usersRelations = relations(users, (r) => ({
	accounts: r.many(accounts),
	sessions: r.many(sessions),
	authenticators: r.many(authenticators),
}));

export const accounts = d.sqliteTable(
	"accounts",
	{
		userId: d
			.text("user_id")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		type: d.text("type").$type<AdapterAccountType>().notNull(),
		provider: d.text("provider").notNull(),
		providerAccountId: d.text("provider_account_id").notNull(),
		refresh_token: d.text("refresh_token"),
		access_token: d.text("access_token"),
		expires_at: d.integer("expires_at"),
		token_type: d.text("token_type"),
		scope: d.text("scope"),
		id_token: d.text("id_token"),
		session_state: d.text("session_state"),
	},
	(account) => [
		d.primaryKey({ columns: [account.provider, account.providerAccountId] }),
	],
);

export const sessions = d.sqliteTable("sessions", {
	sessionToken: d.text("session_token").primaryKey(),
	userId: d
		.text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expires: d.integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = d.sqliteTable(
	"verification_tokens",
	{
		identifier: d.text("identifier").notNull(),
		token: d.text("token").notNull(),
		expires: d.integer("expires", { mode: "timestamp_ms" }).notNull(),
	},
	(vt) => [d.primaryKey({ columns: [vt.identifier, vt.token] })],
);

export const authenticators = d.sqliteTable(
	"authenticators",
	{
		credentialId: d.text("credential_id").notNull().unique(),
		userId: d
			.text("user_id")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		providerAccountId: d.text("provider_account_id").notNull(),
		credentialPublicKey: d.text("credential_public_key").notNull(),
		counter: d.integer("counter").notNull(),
		credentialDeviceType: d.text("credential_device_type").notNull(),
		credentialBackedUp: d
			.integer("credential_backed_up", { mode: "boolean" })
			.notNull(),
		transports: d.text("transports"),
	},
	(auth) => [d.primaryKey({ columns: [auth.userId, auth.credentialId] })],
);
