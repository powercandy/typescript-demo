var path = require('path');
var config = {
	entry: {
		index: './src/demo.tsx'
	},
	output: {
		path: path.join(__dirname, 'compile'),
		publicPath: '',
		filename: 'js/[name].js'
	},
	resolve: {
		extensions: ['.js', '.tsx']
	},
	devtool: 'inline-source-map', // 开启错误提示
	module: {
		loaders: [
			{
				test: /\.tsx$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: []
}
module.exports  = config;
