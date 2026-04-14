// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const rawBasePath = process.env.ASTRO_BASE_PATH ?? "/";

const basePath =
	rawBasePath === "/" ? "/" : `/${rawBasePath.replace(/^\/+|\/+$/g, "")}/`;

export default defineConfig({
	base: basePath,
});
