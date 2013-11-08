var deps = [];
for (var i = 0; i < window.dependencies.length; i++) {
    deps.push(window.dependencies[i]);
}

requirejs.config({
    baseUrl: 'js/',

    paths: {
        'angular': 'angular.min',
        'angularBootstrap': 'angular-bootstrap.min',
        'angularBootstrapPrettify': 'angular-bootstrap-prettify.min',
        'docs': 'docs',
        'docsSetup': 'docs-setup'
    },

    shim: {
        'angularBootstrap': {
            deps: ['angular'],
            exports: 'angularBootstrap'
        },
        'angularBootstrapPrettify': {
            deps: ['angular', 'angularBootstrap'],
            exports: 'angularBootstrapPrettify'
        },
        'docs': {
            deps: ['angular', 'angularBootstrap', 'angularBootstrapPrettify', 'docsSetup'],
            exports: 'docs'
        }
    },

    priority: [
        'angular'
    ],

    deps: deps
});

require([deps, 'angular', 'docs'], function(){
    angular.bootstrap(document, ['docsApp']);
});