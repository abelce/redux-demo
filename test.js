if (!Function.prototype.bind) {
  Function.prototype.bind = function(othis) {
    var args = Array.prototype.slice.call(arguments, 1);
    var fToBind = this;
    var fNOP = function() {};
    var fBound = function() {
      return fToBind.apply(
        this instanceof fNOP ? this : othis,
        args.concat(Array.prototype.slice.call(arguments, 1))
      );
    };

    if (this.prototype) {
      fNOP.prototype = this.prototype;
    }

    fBound.prototype = new fNOP();
    return fBound;
  };
}
