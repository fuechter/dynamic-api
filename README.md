# Dynamic-api [![Build Status](https://img.shields.io/travis/alexandref93/dynamic-api/master.svg)](https://travis-ci.org/alexandref93/dynamic-api) [![NPM version](https://img.shields.io/npm/v/dynamic-api.svg)](http://badge.fury.io/js/dynamic-api)
An API to import fragmented files within other.



**Node support:** 0.10.x, 0.11.x

    var dynamic = require('dynamic-api');
    var contentCompiled = dynamic(path, content, opt);

## Install
Install **dynamic-api** with **[npm](https://www.npmjs.org/)**:

    $ npm install dynamic-api

## Usage
You can require the module:

    var dynamic = require('dynamic-api');

Return a string of file compiled:

    dynamic( path, content [, opt] )

## Options

    paths = array de path relative
    ignoreRepeated = boolean for ignore file repeated or not, default true
    track = boolean for track path file or not, default false
    debug = boolean for import file only debug or not, default false

Example:

    dynamic( path, content, {
        paths: [__dirname + '/directory'],
        ignoreRepeated: false,
        track: true,
        debug: true
    });

## Usage import on files
Import file on .js:

    //import("path/file.js");
    //import("file2.js");

Import file on .js only when debug:

    //import("path/file.js")debug;

Import file on .html:

    <!--import("path/file.html")-->
    <!--import("file2.html")-->

Import file on .html only when debug:

    <!--import("path/file.html")debug-->

Import file on .css:

    /*import("path/file.css")*/
    /*import("file2.css")*/

Import file on .css only when debug:

    /*import("path/file.css")debug*/

Import file on a file any:

    !import("path/file.txt")
    !import("file2.txt")

Import file on a file any only when debug:

    !import("path/file.txt")debug

## Contributing

To contribute to **dynamic-api**, clone this repo locally and commit your code.

Please check that everything works before opening a pull-request.

## License

Dynamic-api is licensed under the [MIT](https://github.com/alexandref93/dynamic-api/blob/master/LICENSE) License
