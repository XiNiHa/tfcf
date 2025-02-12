import { StartClient, mount } from "@solidjs/start/client";

// biome-ignore lint/style/noNonNullAssertion: guaranteed to exist
mount(() => <StartClient />, document.getElementById("app")!);
