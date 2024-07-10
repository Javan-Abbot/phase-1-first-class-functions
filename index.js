function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      return "named function";
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      return "anon function";
    };
  }