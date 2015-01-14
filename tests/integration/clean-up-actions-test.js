import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Integration', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Clean up actions', function() {
  visit('/');
  click('button:contains("Clean Up")');
  andThen(function() {
    equal(find('.action').length, 0, 'Clean all actions');
  });
});
