import Ember from 'ember';

export default Ember.Controller.extend({
  sortProps: ['created:desc'],
  todos: Ember.computed.sort('model', 'sortProps'),
  filter: 'all'
});
