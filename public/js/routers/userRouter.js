
/*
 * Router for the site. Defines the actions to be taken when the pushState (url) changes
 */
define(['marionette'],
  function(Marionette) {
    'use strict';
    
    return Marionette.AppRouter.extend({

      appRoutes: {
        'users/:id': 'user',
        'users*query': 'users',
        'admins*query': 'admins',
        'customers*query': 'admins',
        'reports': 'reports'
      }
    });
  }
);
