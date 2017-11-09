import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  isEditable: false,

  actions: {
    toggleComplete: function() {
      this.get('item').toggleProperty('complete');
      this.get('item').save();
    },

    showEditor: function() {
      this.set('isEditable', true);
      Ember.run.next(() => {
        Ember.$('#edit-' + this.get('item.id')).focus();
      });
    },

    hideEditor: function() {
      this.set('isEditable', false);
    },

    saveTodo: function() {
      this.item.save();
      this.send('hideEditor');
    },

    removeTodo: function() {
      this.get('item').destroyRecord();
    }
  }
});
