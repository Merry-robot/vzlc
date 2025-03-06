

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CBlD75_E.js","_app/immutable/chunks/ztvIonF0.js","_app/immutable/chunks/C7WQt7c3.js"];
export const stylesheets = ["_app/immutable/assets/0.BX-_y2ta.css"];
export const fonts = [];
