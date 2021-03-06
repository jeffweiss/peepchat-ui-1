import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  owner: belongsTo('user'),
  messages: hasMany('message'),
  insertedAt: attr('date'),
  updatedAt: attr('date')
});
