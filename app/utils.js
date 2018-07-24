var Utils = {};

Utils.print = function() {
  if (Globals._debug) {
    console.log.apply({}, arguments);
  }
}
