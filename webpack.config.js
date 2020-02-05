const path = require('path');

module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'styles.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
                    'style-loader',
					{
						loader: 'file-loader',
						options: {
							name: 'styles.module.css',
						}
                    },
					'extract-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
            }
		]
	}
};
