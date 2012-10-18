Backbone.js vs. MarionetteJS
=======================

This is an app implemented twice -- each implementation using a different client-side library for MV* style javascript apps. The [Backbone.js](http://backbonejs.org) implementation is in the "backbone" branch while the version using [MarionetteJS](http://marionettejs.com) is in the "marionette" branch.

The app uses:  
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) for basic styling
* [RequireJS](http://requirejs.org/) for modularizing the javascript code.
* [{LESS}](http://lesscss.org/) for CSS

Setup
-----

1) install [node.js](http://nodejs.org/)
1) clone this repo
1) `cd backbone-vs-marionette`
1) `npm install`
1) `cp db/clean_northwind.db3 db/northwind.db3`
1) `node app.js`
1) Open browser to `http://localhost:3000`

JS concat/minify
----------------

If you want to minify the js
    ./node_modules/requirejs/bin/r.js -o app.build.js 