// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/main/packages/lwc-services/example/lwc-services.config.js
module.exports = {
    resources: [{ from: 'src/client/resources', to: 'dist/resources/' }],
    sourceDir: './src/client',
    devServer: {
        port: '${PORT}',
        host: 'localhost',
        open: false,
        contentBase: './src/client',
        proxy: { '/': 'http://localhost:3002' }
    },
    server: {
        port: 3002,
        host: 'localhost',
        open: false,
        customConfig: './src/server/api.js'
    },
    lwcCompilerOutput: {
        production: {
            compat: false,
            minify: true,
            env: {
                NODE_ENV: 'production'
            }
        }
    }
};
