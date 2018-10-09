class Subject {

  token = 0;
  observers = new Set();

  addListener (fn) {
    this.observers.forEach(observer => {
      if (observer.fn === fn ) {
        throw Error(`this callback is exist!`)
      }
    })
    this.token++;
    let observer = {
      token: this.token,
      fn: fn,
    };
    this.observers.add(observer);
    return observer;
  }

  remove (observer) {
    this.observers.delete(observer);
    observer = null;
  }

  update () {
    this.observers.forEach(observer => observer.fn());
  }
}

let Animal = new Subject();

let dog = Animal.addListener(function(){
  console.log('dog');
});

let cat = Animal.addListener(function(){
  console.log('cat');
})

Animal.update();
Animal.remove(dog);
Animal.update();