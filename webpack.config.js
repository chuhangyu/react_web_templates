module.exports = function(webpackConfig) {
	webpackConfig.babel.plugins.push('antd');

	webpackConfig.module.loaders.unshift({
		test: /\.jsx?$/,
		loader: 'es3ify-loader',
	}, {
		test: /\.(woff|svg|eot|ttf)\??.*$/,
		loader: 'url-loader?limit=50000&name=[path][name].[ext]'
	}, {
		test: /\.scss$/,
		loader: 'style!css!sass'
	});

	return webpackConfig;
};
