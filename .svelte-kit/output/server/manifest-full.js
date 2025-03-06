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
		client: {start:"_app/immutable/entry/start.BOn1vSBN.js",app:"_app/immutable/entry/app.B-2St0om.js",imports:["_app/immutable/entry/start.BOn1vSBN.js","_app/immutable/chunks/Cy7OAJNK.js","_app/immutable/chunks/C7WQt7c3.js","_app/immutable/chunks/BodtxLyV.js","_app/immutable/chunks/Yjtoh9Nk.js","_app/immutable/entry/app.B-2St0om.js","_app/immutable/chunks/C7WQt7c3.js","_app/immutable/chunks/DfO4WV1Q.js","_app/immutable/chunks/EdJP6CmZ.js","_app/immutable/chunks/ztvIonF0.js","_app/immutable/chunks/DFmItAa1.js","_app/immutable/chunks/Yjtoh9Nk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/callback",
				pattern: /^\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
