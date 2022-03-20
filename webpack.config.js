const path = require("path");
const { NODE_ENV = "production" } = process.env;
const nodeExternals = require("webpack-node-externals");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = {
	entry: "./src/index.ts",
	mode: NODE_ENV,
	target: "node",
	watch: NODE_ENV === "development",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [
		new WebpackShellPluginNext({
			onBuildEnd: {
				scripts: ["npm run serve:dev"],
				blocking: false,
				parallel: true,
			},
		}),
	],
	externals: [nodeExternals()],
};
