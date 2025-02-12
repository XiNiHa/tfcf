// @refresh reload
import { SessionProvider } from "@solid-mediakit/auth/client";
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "@unocss/reset/tailwind.css";
import "uno.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>tfcf</Title>
					<Suspense>
						<SessionProvider>{props.children}</SessionProvider>
					</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
