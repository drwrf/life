import Ember from 'ember';
export default Ember.Route.extend({
  activate: function() {
    var setHourClass = function(instant) {
      var hour = new Date().getHours() + 1,
          body = $('body');

      // Remove any currently existing hour classes.
      body.removeClass(function(index, css) {
        return (css.match (/(^|\s)hour-\S+/g) || []).join(' ');

      // And replace them with one reflecting the current hour.
      }).addClass('hour-' + hour)

      if (!instant) {
        body.addClass('hour-transition');
      }
    };

    setInterval(setHourClass, 100 * 60 * 5);
    setHourClass(true);
  }
});
