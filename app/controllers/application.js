import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createAction: function() {
      this.store.createRecord('action', {} );
    }
  }
});
