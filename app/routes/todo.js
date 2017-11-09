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

    switch(filter) {
      case('active'):
        return store.query('todo', {complete: false});
      case('complete'):
        return store.query('todo', {complete: true});
      default:
        return store.findAll('todo');
    }
  }
});
