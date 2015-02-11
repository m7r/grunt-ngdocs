# 0.2.7 (2015-02-12)

## Features
### parameters

* add parameter property support ([e5fc7f72](https://github.com/m7r/grunt-ngdocs/commit/e5fc7f72))

### docs

* ellipsis and title for long module names ([c0795df1](https://github.com/m7r/grunt-ngdocs/commit/c0795df1))

* make use of ngAnimate optional #133 ([99b8a5b8](https://github.com/m7r/grunt-ngdocs/commit/99b8a5b8))

* read package.json if pkg is not set in `grunt.initConfig()` ([4c3d3c3a](https://github.com/m7r/grunt-ngdocs/commit/4c3d3c3a))

* optional view source and improve this doc links #25 ([a42e2f7b](https://github.com/m7r/grunt-ngdocs/commit/a42e2f7b))

* show edit in plunker as link ([29b2b3bb](https://github.com/m7r/grunt-ngdocs/commit/29b2b3bb))

* html5Mode is now disabled by default ([909c994b](https://github.com/m7r/grunt-ngdocs/commit/909c994b))



## Bug fixes
### ngdocs

* add missing method to ngdoc location provider ([a28000d8](https://github.com/m7r/grunt-ngdocs/commit/a28000d8))

* postDigestQueue not being processed ([9a9de1f9](https://github.com/m7r/grunt-ngdocs/commit/9a9de1f9))

* don't break css for method close collapse #119 #126 ([6639f06c](https://github.com/m7r/grunt-ngdocs/commit/6639f06c))




# 0.2.6 (2014-10-27)

## Features
### ngdocs

* parse all given files #58 #71 ([793d797d](https://github.com/m7r/grunt-ngdocs/commit/793d797d))



## Bug fixes
### ngdocs

* update marked #112 ([1e64893f](https://github.com/m7r/grunt-ngdocs/commit/1e64893f))

* remove douple ids from headings ([485408a3](https://github.com/m7r/grunt-ngdocs/commit/485408a3))




# 0.2.5 (2014-09-17)

## Features
### docs

* allow to include angular.js 1.3+ ([7744e914](https://github.com/m7r/grunt-ngdocs/commit/7744e914))


## Bug fixes
### ngdocs

* parse dom before checking for broken links ([53520ce4](https://github.com/m7r/grunt-ngdocs/commit/53520ce4))

### docs

* use ngApp as an attribute #99 ([94297107](https://github.com/m7r/grunt-ngdocs/commit/94297107))

* hide sections headers if angular.js 1.3+ is used ([08e3b199](https://github.com/m7r/grunt-ngdocs/commit/08e3b199))




# 0.2.4 (2014-09-09)



## Bug fixes
### docs

* correct base url in ie #106 ([fb8af0fb](https://github.com/m7r/grunt-ngdocs/commit/fb8af0fb))




# 0.2.3 (2014-08-26)

## Features
### docs

* make example edit optional. ([e0b7b058](https://github.com/m7r/grunt-ngdocs/commit/e0b7b058))

* allow section names to be part of the base url, for example: http://api.myapp.org/ #89 ([60e5a48a](https://github.com/m7r/grunt-ngdocs/commit/60e5a48a))

## Bug fixes
### docs

* remove jsfiddle from edit example options #101 ([22870f19](https://github.com/m7r/grunt-ngdocs/commit/22870f19))


# 0.2.2 (2014-04-29)

## Features
### docs

* make the app load deferrable ([8b714eb9](https://github.com/m7r/grunt-ngdocs/commit/8b714eb9))

### ngdocs

* Support for documenting controllers and capitalized services, prettyprint custom usage examples ([24a26807](https://github.com/m7r/grunt-ngdocs/commit/24a26807))

## Bug fixes
##docs

* proper header img styling in ie8 ([9c8ca7b3](https://github.com/m7r/grunt-ngdocs/commit/9c8ca7b3))


# 0.2.1 (2014-01-13)

## Bug fixes
### docs

* allow requirejs in options.scripts ([faaebd9f](https://github.com/m7r/grunt-ngdocs/commit/faaebd9f))

* links in examples should show url of loaded files (like 0.1 version) ([2b505a15](https://github.com/m7r/grunt-ngdocs/commit/2b505a15))

### ATTENTION

Clear your old docs js folder on upgrade



# 0.2.0 (2014-01-10)

## Features
### docs

* updates for angularjs 1.2.7 ([0eb8fa2f](https://github.com/m7r/grunt-ngdocs/commit/0eb8fa2f))

### BRACKING CHANGE

Works only with angularjs 1.2+

### ATTENTION

Clear your old docs js and css folder on upgrade



# 0.1.10 (2014-01-10)

## Features
### ngdocs

* trim @name lines #51 ([9a27cb05](https://github.com/m7r/grunt-ngdocs/commit/9a27cb05))



## Bug fixes
### ngdocs

* pass options to js file too fix #54 ([97f00b92](https://github.com/m7r/grunt-ngdocs/commit/97f00b92))

* @requires prefix only $name with ng. fix #61 ([d407eb3c](https://github.com/m7r/grunt-ngdocs/commit/d407eb3c))




# 0.1.9 (2014-01-09)

## Features
### ngdocs

* update parser to angularjs 1.2.7 code ([7261eade](https://github.com/m7r/grunt-ngdocs/commit/7261eade))

  markdown parser has switched from showdown to marked.

* import parser unit tests from angularjs 1.2.7 ([fdeaddc1](https://github.com/m7r/grunt-ngdocs/commit/fdeaddc1))

* check broken links ([6d22869b](https://github.com/m7r/grunt-ngdocs/commit/6d22869b))



# 0.1.8 (2014-01-06)

## Features
### docs

* remove angularjs favicon ([8ca93964](https://github.com/m7r/grunt-ngdocs/commit/8ca93964))
* Preprocess navTemplate via grunt.template ([8840d036](https://github.com/m7r/grunt-ngdocs/commit/8840d036))

### ngdocs

* override module name parsing ([3a92ae93](https://github.com/m7r/grunt-ngdocs/commit/3a92ae93))


## Bug fixes
### docs

* load disqus over https ([2a8de1c0](https://github.com/m7r/grunt-ngdocs/commit/2a8de1c0))

### readme

* fixes link ([4345513d](https://github.com/m7r/grunt-ngdocs/commit/4345513d))




# 0.1.7 (2013-09-13)

## Features
### ngdocs

* hide param.property in all usage examples ([3ba0464b](https://github.com/m7r/grunt-ngdocs/commit/3ba0464b))

* adds image option to the navbar for custom image ([1e2a8f7e](https://github.com/m7r/grunt-ngdocs/commit/1e2a8f7e))

### docs

* highlight search best match ([3f8d8512](https://github.com/m7r/grunt-ngdocs/commit/3f8d8512))

* make search pulldown optional ([e774db97](https://github.com/m7r/grunt-ngdocs/commit/e774db97))



## Bug fixes
### docs

* adjust search field width in ie8 ([173d8f3d](https://github.com/m7r/grunt-ngdocs/commit/173d8f3d))




# 0.1.6 (2013-08-01)

## Features
### docs

* optimize sidebar & breadcrum style ([6947ed47](https://github.com/m7r/grunt-ngdocs/commit/6947ed47))

* smaller font size for headings ([a1a8eb5b](https://github.com/m7r/grunt-ngdocs/commit/a1a8eb5b))



## Bug fixes
### docs

* show section in breadcrum ([4c1dd72f](https://github.com/m7r/grunt-ngdocs/commit/4c1dd72f))




# 0.1.5 (2013-07-30)

## Bug fixes
### docs

* display pages in none html5 mode ([f61fd5a2](https://github.com/m7r/grunt-ngdocs/commit/f61fd5a2))



# 0.1.4 (2013-07-29)

## Features
### docs

* allow custom routes in examples #23 ([2836e465](https://github.com/m7r/grunt-ngdocs/commit/2836e465))




# 0.1.3 (2013-07-19)

## Features
### ngdocs

* `@param` support for object properties ([5e3c402c](https://github.com/m7r/grunt-ngdocs/commit/5e3c402c))

  @param {Object} param Some obj
  @param {String} param.name some name on the obj 
   
  Object properties are not included in the method signature

* support custom items with `@requires` ([d0f488c2](https://github.com/m7r/grunt-ngdocs/commit/d0f488c2))

  `@requires $cookie` => `$cookie` href = currentsection/ng.$cookie
  `@requires module.directive:tabs` => `tabs` href = currentsection/module.directive:tabs
  `@requires /section2/module.directive:tabs` => `tabs` href = section2/module.directive:tabs



## Bug fixes
### ngdocs

* make `@methodOf` work in all sections #21 ([468904ab](https://github.com/m7r/grunt-ngdocs/commit/468904ab))

### task

* make backward compatible to 0.1.1 ([64f656ff](https://github.com/m7r/grunt-ngdocs/commit/64f656ff))




# 0.1.2 (2013-06-27)

## Features

### global

* add module name to none overview module page ([5b58367a](https://github.com/m7r/grunt-ngdocs/commit/5b58367a))

* allow multiple API sections or custom name for API section ([3ebc5153](https://github.com/m7r/grunt-ngdocs/commit/3ebc5153))

* make start page configurable #8 ([5e764f54](https://github.com/m7r/grunt-ngdocs/commit/5e764f54))

* allow additional custom types ([df3103be](https://github.com/m7r/grunt-ngdocs/commit/df3103be))

### docs

* make remote css files work ([2d4e2aeb](https://github.com/m7r/grunt-ngdocs/commit/2d4e2aeb))

* show section title in breadcrum ([5b4e1a71](https://github.com/m7r/grunt-ngdocs/commit/5b4e1a71))


## Bug fixes

### global

* name overview pages for modules with dots correctly #13 ([c804b1d1](https://github.com/m7r/grunt-ngdocs/commit/c804b1d1))

* build ngdocs on windows #17 ([27a884aa](https://github.com/m7r/grunt-ngdocs/commit/27a884aa))


### ngdocs

* remove hardcoded section 'api' for js files ([951db22e](https://github.com/m7r/grunt-ngdocs/commit/951db22e))

### docs

* take out 'IE restrictions' warning ([a376ff3c](https://github.com/m7r/grunt-ngdocs/commit/a376ff3c))

* search form submit load page in both url modes ([183f67ce](https://github.com/m7r/grunt-ngdocs/commit/183f67ce))



# 0.1.1 (2013-06-01)

## Features

### docs

* Add partial support for dot in module name #4 (bf9b22b)

* Add navbar customizable template, title option (7a8775a)

* Add active class to active navbar item (c89ceb2)

* Make remote scripts not be copied, only referenced (da75892)

* Add 'html5mode' option and copy scripts to docs destination (b1f7413)



## Bug fixes
### docs

* remove sidebar flicker at navigation in large docs (77f1521)



# 0.1.0 (2013-05-15)

## Features
### grunt-ngdocs

* Build docs with grunt (8f61393)

### docs

* show current script urls and load these to plunk & jsfiddle (fc39352)

* make compatible with angular 1.0.+ and 1.1.+ (28e55bd)



## Bug fixes
### docs

* sidebar css (be5df81)


