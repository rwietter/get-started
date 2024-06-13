import { sveltekit } from '@sveltejs/kit/vite';
import Icons from "unplugin-icons/vite";
import { defineConfig } from 'vite';

/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/svelte" />

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
		}),
	],
});
