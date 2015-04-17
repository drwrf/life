import Ember from 'ember';
export default Ember.Route.extend({
  activate: function() {
    var setHourClass = function() {
      var hour = new Date().getHours() + 1;

      // Remove any currently existing hour classes.
      $('body').removeClass(function(index, css) {
        return (css.match (/(^|\s)hour-\S+/g) || []).join(' ');

      // And replace them with one reflecting the current hour.
      }).addClass('hour-' + hour);
    };

    setInterval(setHourClass, 100 * 60 * 15);
    setHourClass();
  },


});
