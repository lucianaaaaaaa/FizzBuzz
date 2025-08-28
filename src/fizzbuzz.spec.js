import convertirFizzBuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("deberia convetir un numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });
  it("deberia convetir cualquier numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });
  //numero multiplo de 3
  it("deberia convetir un numero 3 a Fizz", () => {
    expect(convertirFizzBuzz(3)).toEqual("Fizz");
  });
  it("deberia convetir cualquier numero multiplo de 3 a Fizz", () => {
    expect(convertirFizzBuzz(6)).toEqual("Fizz");
  });
  //numero multiplo de 5
  it("deberia convetir un numero 5 a Buzz", () => {
    expect(convertirFizzBuzz(5)).toEqual("Buzz");
  });
  it("deberia convetir cualquier numero multiplo de 5 a Buzz", () => {
    expect(convertirFizzBuzz(10)).toEqual("Buzz");
  });
//numero multiplo de 3 y 5
    it("deberia convetir un numero 15 a FizzBuzz", () => {
        expect(convertirFizzBuzz(15)).toEqual("FizzBuzz");
    });
    it("deberia convetir cualquier numero multiplo de 3 y 5 a FizzBuzz", () => {
        expect(convertirFizzBuzz(30)).toEqual("FizzBuzz");
    });
    
});
 

