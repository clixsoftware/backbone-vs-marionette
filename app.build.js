({
    baseUrl: "./public/js/",
    mainConfigFile: "./public/js/main.js",
    optimize: "uglify",
    include: ['main'],
    // insertRequire: ['main'],
    out: 'main-built.js',
    wrap: true
})
