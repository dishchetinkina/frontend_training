import webpack from 'webpack'

const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

// Если не используем - нужен bable-loader
const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

export function buildLoaders(): webpack.RuleSetRule[] {
    return [
        tsLoader,
        cssLoader,
    ]
}
