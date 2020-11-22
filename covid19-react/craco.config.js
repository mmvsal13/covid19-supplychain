const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': 'rgba(163, 87, 72, 1)',
                            '@font-family': 'Poppins',
                            '@border-radius-base': '8px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
