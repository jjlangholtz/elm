import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createAction: function() {
      var record = this.store.createRecord('action', {} );
      record.save();
    }
  }
});
