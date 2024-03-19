import webpack from 'webpack'

const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

export function buildLoaders(): webpack.RuleSetRule[] {
    return [
        tsLoader,
    ]
}
