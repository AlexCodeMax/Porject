import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';

export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const cssLoaders = buildCssLoader(isDev);
    const typescriptLoader = {
        test: /\.tsx?$/,
        use:'ts-loader',
        exclude: /node_modules/,

    };

    return [
        typescriptLoader,
        cssLoaders,
        svgLoader,
        fileLoader
    ];

}