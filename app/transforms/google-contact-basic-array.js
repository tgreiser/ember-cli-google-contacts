import Ember from 'ember';
import DS from 'ember-data';

/**
 * @class GoogleContactBasicArrayTransform
 * @extends DS.Transform
 */
export default DS.Transform.extend({
  /**
   * Used to parse one item
   * @property parser
   * @type {Function}
   */
  parser: function(item){
    if (typeof item !== 'object') { // This should never run, but just for extra safety
      console.log("Discarding invalid contact node:");
      console.log(item);
      return; Ember.Object.create({});
    }
    return Ember.Object.create(item);
  },

  /**
   * @inheritDoc
   */
  deserialize: function (serialized) {
    var mappable = serialized || [];
    return Ember.A(mappable.map(Ember.run.bind(this, 'parser')));
  },

  /**
   * @inheritDoc
   */
  serialize: function (deserialized) {
    return deserialized.toArray();
  }
});
