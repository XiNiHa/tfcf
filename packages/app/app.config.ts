import { defineConfig } from "@solidjs/start/config";
import unocss from "unocss/vite";

export default defineConfig({
	ssr: true,
	vite: () => ({
		plugins: [unocss()],
	}),
});
