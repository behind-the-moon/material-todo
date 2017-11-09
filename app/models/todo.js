import DS from 'ember-data';

export default DS.Model.extend({
  complete: DS.attr('boolean'),
  text: DS.attr('string'),
  created: DS.attr('number', {defaultValue: () => (new Date().getTime()) })
});
