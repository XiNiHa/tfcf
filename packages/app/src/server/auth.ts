import type { SolidAuthConfig } from "@solid-mediakit/auth";

declare module "@auth/core/types" {
	export interface Session {
		user?: DefaultSession["user"];
	}
}

export const authOptions: SolidAuthConfig = {
	providers: [],
	basePath: "/api/auth",
};
