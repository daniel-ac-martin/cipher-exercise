Cipher exercise
===============

This is a programming exercise in which you are tasked with writing a simple
cipher function.

The exercise is broken into three stages that get progressively harder. - See
how far can you get!


Pre-requisites
--------------

To complete this exercise you will need to have a recent version of Node.js
installed.


Getting started
---------------

1. Clone this repo
2. Run `npm install`
3. Run `npm test`

You will see that many of the unit tests fail.

Your task is to make the unit tests pass by editing the implementation file,
`./index.js`.


Overall aim
-----------

The overall aim (as defined by the unit tests) is to build a little library that
will apply a very simple 'cipher' to a string. This means that the letters are
shifted forward by a set number of characters (in this case 2). e.g.

'a' becomes 'c'
'b' becomes 'd'

etc...

At the end of the alphabet, we need to loop around back to the start so that 'y'
becomes 'a' and 'z' becomes 'b'.

For the purposes of this exercise we will pretend that upper-case characters
don't exist and that the only special character is a space which we wish to
leave un-transformed. i.e.

' ' remains as ' '.

This will allow the library to 'encrypt' a string such as 'my very secret
message' to 'oa xgta ugetgv oguucig', which can in turn be decrypted by another
function back to its original form.


Understanding the code
----------------------

Your implementation file is `index.js` which contains some code to get you
started. You can either modify this code or delete it all and start from
scratch.

You are also provided with a `helpers.js` file that contains some functions that
might help you to solve the problem.


### charToInt

`charToInt()` will take a letter (a single character string) and turn it into a number. i.e.

`charToInt('a')` will return `0`

`charToInt('b')` will return `1`

`charToInt('c')` will return `2`

...

`charToInt('z')` will return `25`

The function does not expect to be passed anything except the lower-case
characters, outside of this range, its behaviour is undefined.

The implementation is tested using [jest] through the specification file
`index.spec.js` you shouldn't need to edit this file until you reach stage 2.


### intToChar

`intToChar()` does the opposite of `charToInt()` and will turn a number, between
0 and 25, into a single-character string from 'a' to 'z'. i.e.

`intToChar(0)`will return `'a'`

`intToChar(1)`will return `'b'`

`intToChar(2)`will return `'c'`

...

`intToChar(25)`will return `'z'`

The function does not expect to be passed anything except the integers between 0
and 25 inclusive, outside of this range, its behaviour is undefined.

**Note:** You do NOT have to make use of these functions if you don't want to.
They are just provided for your convenience.


Stage 1: Implementing encrypt()
-------------------------------

You should start off by running the tests and looking at the first failing test.
You'll find that the library (`index.js`) is failing to transform the string
`abc` into `cde`.

You should modify `index.js` so that this test now passes. When it does, you
should take a snapshot of your work so far with `git commit -am 'encrypt simple
message'`.

You should then keep working through the remaining failing tests, committing
your work as you go.


Stage 2: Implementing decrypt()
-------------------------------

Now that `encrypt()` works you should implement `decrypt()` so that the
encrypted strings can be read. Open the unit test file, `index.spec.js`. You
should find that a group of tests (for `decrypt()`) are being skipped.
```js
  describe.skip('decrypt', () => {
```

You should change this line to remove `.skip`. i.e:
```js
  describe('decrypt', () => {
```

If you run the tests again (with `npm test`) you will find that you have some
new, failing tests to fix. Fix each of these in turn, making snapshots of your
work as you go.


Stage 3: Improving the interface
--------------------------------

You should now have a great library for shifting letter by 2. But, what if you
wanted to shift the letters by an arbitrary number of places? For one, the
interface of your library would need to change and so the unit test / spec file
would need to change to reflect this.

You should now do the following:
1. Redesign the interface to allow a user to specify the number of characters
   they wish to shift by.
2. Update the `index.spec.js` file to test for compliance to this interface.
3. Update your implementation file `index.js` so that it passes your tests.

You should think about what it would be like to use the interface that you
design. Would it be convenient and easy to use?

You should try to commit / snapshot your work as you progress.

Good luck!


[jest]: https://jestjs.io/
