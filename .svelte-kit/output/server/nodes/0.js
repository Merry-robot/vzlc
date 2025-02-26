

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C734u50k.js","_app/immutable/chunks/B8oW0O1Z.js","_app/immutable/chunks/CT2-fyGe.js"];
export const stylesheets = ["_app/immutable/assets/0.dYIgCIvl.css"];
export const fonts = [];
