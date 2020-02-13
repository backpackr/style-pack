const path = require('path');

module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'app.js',
	},
	module: {
		rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        }
                    },
                ]
            }
		]
    }
};
