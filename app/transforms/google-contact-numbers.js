import GoogleContactBasicArrayTransform from './google-contact-basic-array';

/**
 * @class GoogleContactNumbersTransform
 * @extends GoogleContactBasicArrayTransform
 */
export default GoogleContactBasicArrayTransform.extend({
  /**
   * @inheritDoc
   * Apply an extra layer of filtering to get rid of invalid phone entries with no URI, etc
   */
  deserialize: function (serialized) {
    var mappable = (serialized || []).filter(function(item, index, enu) {
      return typeof item === 'object'
    });
    return Ember.A(mappable.map(Ember.run.bind(this, 'parser')));
  }
});
