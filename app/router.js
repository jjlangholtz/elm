import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('inbox', { path: '/' });
  this.route('forecast');
});

export default Router;
