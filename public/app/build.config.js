({
    // use configurations present here
    mainConfigFile: "app-mixed-modded.js", 

    // input file
    name: "app-mixed-modded",

    // output file name
    out: "mix.built.js",

    // We do not require loaders. Replace them with a stub (dummy) function.
    // This reduces final build file size as well as ensures no lazy call happens.
    // Since we used packages, Hence the format became <pack-name>/<file-name>.
    // How did I know this name, I checked in the built file.
    stubModules : ['css/css.min', 'text/text'],
    
    // disable uglify for checking
    optimize: 'none',
})
