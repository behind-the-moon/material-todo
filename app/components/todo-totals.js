import Ember from 'ember';

export default Ember.Component.extend({
  totalLeft: function() {
    return this.get('items').filterBy('complete', false).length;
  }.property('items.@each.complete')
});
