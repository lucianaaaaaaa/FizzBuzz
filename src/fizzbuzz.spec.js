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
});
 

