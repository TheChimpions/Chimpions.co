

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c6eef1e3.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js"];
export const stylesheets = [];
export const fonts = [];
