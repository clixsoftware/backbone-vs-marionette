Backbone.js vs. MarionetteJS
=======================

This is an app implemented twice -- each implementation using a different client-side library for MV* style javascript apps. The [Backbone.js](http://backbonejs.org) implementation is in the "backbone" branch while the version using [MarionetteJS](http://marionettejs.com) is in the "marionette" branch.

The app uses:  
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/) for basic styling
* [RequireJS](http://requirejs.org/) for modularizing the javascript code.
* [{LESS}](http://lesscss.org/) for CSS

Setup
-----

# install [node.js}(http://nodejs.org/)
# clone this repo
# `cd backbone-vs-marionette`
# `npm install`
# `cp db/clean_northwind.db3 db/northwind.db3`
# `node app.js`
# Open browser to `http://localhost:3000`

JS concat/minify
----------------

If you want to minify the js
    ./node_modules/requirejs/bin/r.js -o app.build.js 