const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, 'modules'),
		filename: 'app.module.js',
	},
	module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 
                        'postcss-loader', 
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                            }
                        },
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./styles.module.css')
    ]
};
