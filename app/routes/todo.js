import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    filter: {
      refreshModel: true
    }
  },

  model: function(params) {
    let filter = params.filter || 'all';
    let store = this.get('store');
    let todos;

    switch(filter) {
      case('active'):
        todos = store.query('todo', {complete: false});
        break;
      case('complete'):
        todos = store.query('todo', {complete: true});
        break;
      default:
        todos = store.findAll('todo');
        break;
    }

    return Ember.RSVP.hash({ todos: todos, model : store.findAll('todo')});
  }
});
