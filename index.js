function receivesAFunction(callback){
  return callback()
}

function returnsANamedFunction() {
  function before() {    
    return 'returns a named function!';
  }
  return before;
}

function returnsAnAnonymousFunction() {
  return function() {
    return "returns an anonymous function";
  };
}
