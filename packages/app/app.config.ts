import { defineConfig } from "@solidjs/start/config";
import unocss from "unocss/vite";

export default defineConfig({
	ssr: true,
	middleware: "./src/middleware.ts",
	server: {
		preset: "cloudflare_module",
	},
	vite: () => ({
		plugins: [unocss()],
	}),
});
