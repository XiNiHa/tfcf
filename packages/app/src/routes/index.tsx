import { createAsync } from "@solidjs/router";
import type { Component } from "solid-js";
import { useDB } from "~/server/db";

const getData = async () => {
	"use server";

	return useDB().query.users.findMany();
};

const Home: Component = () => {
	const data = createAsync(() => getData());
	return (
		<main>
			<h1 class="text-2xl">tfcf</h1>
			<pre>{JSON.stringify(data(), null, 2)}</pre>
		</main>
	);
};

export default Home;
