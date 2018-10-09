'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subject = function () {
  function Subject() {
    _classCallCheck(this, Subject);

    this.token = 0;
    this.observers = new Set();
  }

  _createClass(Subject, [{
    key: 'addListener',
    value: function addListener(fn) {
      this.token++;
      var observer = {
        token: this.token,
        fn: fn
      };
      this.observers.add(observer);
      return observer;
    }
  }, {
    key: 'remove',
    value: function remove(observer) {
      this.observers.delete(observer);
      observer = null;
    }
  }, {
    key: 'update',
    value: function update() {
      this.observers.forEach(function (observer) {
        return observer.fn();
      });
    }
  }]);

  return Subject;
}();

var Animal = new Subject();

var dog = Animal.addListener(function () {
  console.log('dog');
});

var cat = Animal.addListener(function () {
  console.log('cat');
});

Animal.update();
Animal.remove(dog);
Animal.update();