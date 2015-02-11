function bar() {
  throw new Error('This is an error!');
}
function foo() {
  bar();
}
foo();
