import convertirFizzBuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("deberia convetir un numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });
  it("deberia convetir cualquier numero que no es multiplo de 3 ni 5", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });
});
 

