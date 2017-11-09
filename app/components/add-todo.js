import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isInputDisplayed: false,
  newTodoText: '',

  didInsertElement: function() {
    if (this.get('items').length === 0) {
      this.send('showInput');
    }
  },

  actions: {
    showInput: function() {
      this.set('isInputDisplayed', true);
      Ember.run.next(function() {
        Ember.$('#new-todo-text').focus();
      });
    },

    hideInput: function() {
      this.set('isInputDisplayed', false);
    },

    createTodo: function() {
      let record = this.get('store').createRecord('todo', {
        complete: false,
        text: this.get('newTodoText')
      });

      record.save();
      this.set('newTodoText', '');
      this.send('hideInput');
    }
  }
});
