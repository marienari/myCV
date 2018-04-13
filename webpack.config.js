var path = require('path')

module.exports = {
	entry: ['./src/Root.jsx'],
	output: {
		path: path.resolve('dist'),
		filename: 'out.js',
	},
	devServer: {
		inline: true,
		contentBase: './',
		port: 3000,
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						[
							'es2015',
							{
								modules: false,
							},
						],
						'react',
						'stage-2',
						// 'babili'
					],
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						[
							'es2015',
							{
								modules: false,
							},
						],
						'stage-2',
						// 'babili'
					],
				},
			},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{
				test: /\.(scss)$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
			},
			// {
			// 	test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			// 	loader: 'url-loader?limit=100000',
			// },
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=src/[name].[ext]',
			},
		],
	},
}
