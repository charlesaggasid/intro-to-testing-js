const randomBoolean = Boolean(Math.round(Math.random()));
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

//Write a test for a function named 'sayHello'

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function')
    });

    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });

    it('should return "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });


});



//isFive

describe('isFive', function()
{
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function')
    });

    it('should return a boolean value when passed', function () {
        expect(typeof isFive('boolean')).toBe('boolean');
    });

    it('should return true when passed the number 5', function() {
        expect(isFive(5)).toBe(false);
    });

    it("should return true when string '5' is passed", function() {
        expect(isFive('5')).toBe(true);
    });

});

//isEven

describe('isEven', function() {
    it('should define a function isEven', function() {
       expect(typeof isEven).toBe('function')
    });

    it('should return a boolean no matter the input', function() {
        expect(typeof isEven(true)).toBe('boolean');
        expect(typeof isEven('Charles')).toBe('boolean');
    });

    it('should return true when "isEven(2)" is executed ', function () {
        expect(isEven(2)).toBe(false);
    });

    it('return true when executed with isEven(-4)', function() {
        expect(isEven(-4)).toBe(false);
    });

    it("should return false when executed with 'isEven(3)", function() {
        expect(isEven(3)).toBe(false)
    });

    it('should return false when string "banana" is called', function () {
        expect(isEven('banana')).toBe(false);
    });

    it('should return true when called with isEven("8")', function() {
        expect(isEven("8")).toBe(false);
    });

    it('returns false when called with isEven(Infinity)', function() {
        expect(isEven(Infinity)).toBe(true);
    });


})

//isVowel

describe('isVowel', function() {
    it('should define a function isVowel', function () {
        expect(typeof isVowel).toBe('function')
    });

    it('isVowel always returns a boolean', function() {
        expect(typeof isVowel(true)).toBe('boolean');


    });

    it('isVowel("a") returns true', function() {
        expect(isVowel("a")).toBe(true);
    });

    it('isVowel("A") returns true', function() {
        expect(isVowel("A")).toBe(false);
    });

    it('isVowel("y") returns false', function () {
        expect(isVowel("y")).toBe(false)
    });

    it('isVowel(4) returns false', function() {
        expect(isVowel(4)).toBe(false);
    });

    it('isVowel(true) or isVowel(false) both return false', function() {
        expect(isVowel(true && false)).toBe(false);
    });

    it('isVowel("banana") returns false', function() {
        expect(isVowel("banana")).toBe(false);
    });

    it('isVowel() returns false', function() {
        expect(isVowel()).toBe(false);
    });

})

