# grunt-duplicate
[![Build Status](https://travis-ci.org/h2non/grunt-duplicate.png)](https://travis-ci.org/h2non/grunt-duplicate)
[![Dependency Status](https://gemnasium.com/h2non/grunt-duplicate.png)](https://gemnasium.com/h2non/grunt-duplicate)

> Duplicate files via Grunt with templating support

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-duplicate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-duplicate');
```

## The "duplicate" task

### Usage Examples
In your project's Gruntfile, add a section named `duplicate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  duplicate: {
    options: {
      template: true,
      copies: 100,
      data: {
        custom: 'data'
      }
    },
    files: {
      'copies/': ['src/*.js', 'src/*.css'],
    }
  }
})
```

Example file
```
Generated file: <%= id %>
Total copies: <%= total %>
```

### Options

#### template
Type: `boolean`
Default value: `true`

Process files content and replaces values between `<%=` `%>`

#### copies
Type: `number`
Default value: `1`

Number of copies to do per file

#### data
Type: `object`
Default value: `null`

Pass custom data to replace in the file

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License

Copyright (c) 2014 Tomas Aparicio 

Released under the MIT license
