#grunt-ngdocs
Grunt plugin to create a documentation like [AngularJS](http://docs.angularjs.org)
NOTE: this plugin requires Grunt 0.4.x

##Getting Started
From the same directory as your project's Gruntfile and package.json, install this plugin with the following command:

`npm install grunt-ngdocs --save-dev`

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-ngdocs');
```

##Config
Inside your `Gruntfile.js` file, add a section named *ngdocs*.
Here's a simple example:

```js
ngdocs: {
  all: ['src/**/*.js']
}
```

And with all options:

```js
ngdocs: {
  options: {
    dest: 'docs'
    scripts: ['../app.min.js'],
    analytics: {
          account: 'UA-08150815-0',
          domainName: 'my-domain.com'
    },
    discussions: {
          shortName: 'my',
          url: 'http://my-domain.com',
          dev: false
    }
  },
  tutorial: {
    src: ['content/tutorial/*.ngdoc'],
    title: 'Tutorial'
  },
  api: {
    src: ['src/**/*.js', '!src/**/*.spec.js'],
    title: 'API Documentation'
  }
}
```

###Options

####dest
[default] 'docs'
Folder relative to your Gruntfile were the documentation should be build.

####scripts
[default] ['js/angular.min.js']
Set which angular.js file or addional custom js files are loaded to the app. This allows the live examles to use custom directives, services etc. The documentation app works with angular.js 1.0.6 and 1.1.5.

####analytics
Optional include Google Analytics in the documentation app.

####discussions
Optional include [discussions](http://http://disqus.com) in the documentation app.

###Targets
Each grunt target creates a section in the documentation app.

####src
[required] List of files to parse for documentation comments.

####title
[default] 'API Documentation'
Set the name for the section in the documentation app.


##How it works
The task parses the specified files for doc commets and extract these in partial html files for the documentation app.

At first run all necessary files will be copied to the destination folder.
After that only index.html, js/docs-setup.js and the partials will be overwritten.

No longer needed partials will not be deleted. Use for example the grunt-contrib-clean task to clean the docs folder before creating a distribution build.

A doc commet looks like this:
```js
/**
 * @ngdoc directive
 * @name rfx.directive:rAutogrow
 * @element textarea
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * **Note:** ie<9 needs pollyfill for window.getComputedStyle
 *
 * @example
   <example module="rfx">
     <file name="index.html">
         <textarea ng-model="text" r-autogrow class="input-block-level"></textarea>
         <pre>{{text}}</pre>
     </file>
   </example>
 */
angular.module('rfx', []).directive('rAutogrow', function() {
  //some nice code
});
```

See the [AngularJS source code](https://github.com/angular/angular.js/tree/master/src/ng) for more examples.

##License
MIT License