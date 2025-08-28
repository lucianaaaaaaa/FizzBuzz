function convertirFizzBuzz(n){
    if(n%3===0)
    {
        return "Fizz";
    }
    if(n%5===0)
    {
        return "Buzz";
    }
    if(n==15)
    {
        return "FizzBuzz";
    }
    return n+"";
}

export default convertirFizzBuzz;