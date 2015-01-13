import DS from 'ember-data';

var action = DS.Model.extend({
  title: DS.attr('string')
});

export default action.reopenClass({
  FIXTURES: [
  ]
});
