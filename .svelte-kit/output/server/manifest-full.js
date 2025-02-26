export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Csx57qcs.js",app:"_app/immutable/entry/app.D07UhlzE.js",imports:["_app/immutable/entry/start.Csx57qcs.js","_app/immutable/chunks/Cg3FLvyC.js","_app/immutable/chunks/CT2-fyGe.js","_app/immutable/chunks/uexoTMy1.js","_app/immutable/chunks/BTfCyI3P.js","_app/immutable/entry/app.D07UhlzE.js","_app/immutable/chunks/CT2-fyGe.js","_app/immutable/chunks/B4Wq__W9.js","_app/immutable/chunks/BhPnmNar.js","_app/immutable/chunks/B8oW0O1Z.js","_app/immutable/chunks/DHAGPYvt.js","_app/immutable/chunks/BTfCyI3P.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
