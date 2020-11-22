const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': 'rgba(112, 190, 221, 1)',
                            '@font-family': 'Poppins',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
