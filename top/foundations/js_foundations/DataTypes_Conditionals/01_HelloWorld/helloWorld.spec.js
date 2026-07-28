const helloWorld = require('./helloWorld'); //import

describe('Hello World', function() { 
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});

//test file 