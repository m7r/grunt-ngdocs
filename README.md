#grunt-ngdocs
Grunt plugin to create a documentation like [AngularJS](http://docs.angularjs.org)
NOTE: this plugin requires Grunt 0.4.x

ATTENTION: grunt-ngdocs 0.2+ is for angularjs 1.2+
If you use on older version stay with grunt-ngdocs 0.1+
Please clear your old docs js and css folders after upgrade.

##Getting Started
From the same directory as your project's Gruntfile and package.json, install this plugin with the following command:

`npm install grunt-ngdocs --save-dev`

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-ngdocs');
```

A full working example can be found at [https://github.com/m7r/grunt-ngdocs-example](https://github.com/m7r/grunt-ngdocs-example)

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
    html5Mode: true,
    startPage: '/api',
    title: "My Awesome Docs",
    image: "path/to/my/image.png",
    imageLink: "http://my-domain.com",
    titleLink: "/api",
    bestMatch: true,
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
Folder relative to your Gruntfile where the documentation should be built.

####scripts
[default] ['angular.js']
Set which angular.js file or addional custom js files are loaded to the app. This allows the live examples to use custom directives, services, etc. The documentation app works with angular.js 1.0.+ and 1.1.+.

Possible values:

  - ['angular.js'] use angularjs 1.1.5 delivered with ngdocs
  - ['path/to/file.js'] file will be copied into the docs, into a `grunt-scripts` folder
  - ['http://example.com/file.js', 'https://example.com/file.js', '//example.com/file.js'] reference remote files (eg from a CDN)
  - ['../app.js'] reference file relative to the dest folder

####deferLoad
[default] 'false'
If you want to use requirejs as loader set this to `true`.
Include 'js/angular-bootstrap.js', 'js/angular-bootstrap-prettify.js', 'js/docs-setup.js', 'js/docs.js' with requirejs and finally bootstrap the app `angular.bootstrap(document, ['docsApp']);`.

####styles
[default] []
Copy additional css files to the documentation app

####analytics
Optional include Google Analytics in the documentation app.

####discussions
Optional include [discussions](http://disqus.com) in the documentation app.

####title
[default] "name" or "title" field in `pkg`
Title to put on the navbar and the page's `title` attribute.  By default, tries to
find the title in the `pkg`. If it can't find it, it will go to an empty string.

####startPage
[default] '/api'
Set first page to open.

####html5Mode
[default] 'true'
Whether or not to enable `html5Mode` in the docs application.  If true, then links will be absolute.  If false, they will be prefixed by `#/`.

####image
A URL or relative path to an image file to use in the top navbar.

####titleLink
[default] no anchor tag is used
Wraps the title text in an anchor tag with the provided URL.

####imageLink
[default] no anchor tag is used
Wraps the navbar image in an anchor tag with the provided URL.

####bestMatch
[default] false
The best matching page for a search query is highlighted and get selected on return.
If this option is set to true the best match is shown below the search field in an dropdown menu. Use this for long lists where the highlight is often not visible.

####navTemplate
[default] null
Path to a template of a nav HTML template to include.  The css for it
should be that of listitems inside a bootstrap navbar:
```html
<header class="header">
  <div class="navbar">
    <ul class="nav">
      {{links to all the docs pages}}
    </ul>
    {{YOUR_NAV_TEMPLATE_GOES_HERE}}
  </div>
</header>
```
Example: 'templates/my-nav.html'

The template, if specified, is pre-processed using [grunt.template](https://github.com/gruntjs/grunt/wiki/grunt.template#grunttemplateprocess).

###Targets
Each grunt target creates a section in the documentation app.

####src
[required] List of files to parse for documentation comments.

####title
[default] 'API Documentation'
Set the name for the section in the documentation app.

####api
[default] true for target api
Set the sidebar to advanced mode, with sections for modules, services, etc.


##How it works
The task parses the specified files for doc comments and extracts them into partial html files for the documentation app.

At first run, all necessary files will be copied to the destination folder.
After that, only index.html, js/docs-setup.js, and the partials will be overwritten.

Partials that are no longer needed will not be deleted. Use, for example, the grunt-contrib-clean task to clean the docs folder before creating a distribution build.

After an update of grunt-ngdocs you should clean the docs folder too.

A doc comment looks like this:
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
         <textarea ng-model="text"rx-autogrow class="input-block-level"></textarea>
         <pre>{{text}}</pre>
     </file>
   </example>
 */
angular.module('rfx', []).directive('rAutogrow', function() {
  //some nice code
});
```

Check out the [Writing AngularJS documentation wiki article](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation) to see what's possible,
or take a look at the [AngularJS source code](https://github.com/angular/angular.js/tree/master/src/ng) for more examples.

##Batarang
If your examples are empty you maybe have batarang enabled for the docs site.
This is the same issue as on http://docs.angular.js and the batarang team is informed about it #68.

##License
MIT License
