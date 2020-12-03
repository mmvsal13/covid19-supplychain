const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FB8027',
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
