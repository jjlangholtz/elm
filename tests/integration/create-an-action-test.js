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

test('Create an action', function() {
  visit('/');
  click('button:contains("Create Action")');
  andThen(function() {
    equal(find('.action').length, 1, 'An action is rendered');
  });

  fillIn('input', 'Walk the dog');
  keyEvent('input', 'keypress', 13);
  andThen(function() {
    equal(find('.action input').val(), 'Walk the dog', 'Text updated');
  });
});
