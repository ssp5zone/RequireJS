({    
    // Without the base URL, it starts looking for input file 
    // in mainConfigFile location  
    baseUrl: ".",

    // use configurations present here
    // Notice we have use the configurations of different locations
    mainConfigFile: ["main-modded.js", "blocks/main.js", "coder/main.js", "sidebar/main.js"],

    // input file
    name: "main-modded",

    // output file name
    // putting it elsewhere creates copies of all file (including node_modules) inside it
    // Hence, let it be here.
    out: "pack.built.js",

    // We do not require loaders. Replace them with a stub (dummy) function.
    // This reduces final build file size as well as ensures no lazy call happens.
    // Since we used packages, Hence the format became <pack-name>/<file-name>.
    // How did I know this name, I checked in the built file.
    stubModules : ['css/css.min', 'text/text'],
    
    // disable uglify for checking
    optimize: 'none',
})
