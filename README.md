# Dynamic-api
An API to import fragmented files within other.

[![Build Status](https://img.shields.io/travis/alexandref93/dynamic-api/master.svg)](https://travis-ci.org/alexandref93/dynamic-api)
[![NPM version](https://img.shields.io/npm/v/dynamic-api.svg)](http://badge.fury.io/js/dynamic-api)

**Node support:** 0.10.x, 0.11.x

    var dynamic = require('dynamic-api');
    var contentCompiled = dynamic(fileStream, opt);

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

Example:

    dynamic( path, content, {
        paths: [__dirname + '/directory'],
        ignoreRepeated: false
    });

## Usage import on files
Import file on .js:

    //import("path/file.js");
    //import("file2.js");

Import file on .html:

    <!--import("path/file.html")-->
    <!--import("file2.html")-->

Import file on .css:

    /*import("path/file.css")*/
    /*import("file2.css")*/

Import file on a file any file:

    !import("path/file.txt")
    !import("file2.txt")

## Contributing

To contribute to **dynamic-api**, clone this repo locally and commit your code.

Please check that everything works before opening a pull-request.

## License

Dynamic-api is licensed under the [MIT](https://github.com/alexandref93/dynamic-api/blob/master/LICENSE) License
