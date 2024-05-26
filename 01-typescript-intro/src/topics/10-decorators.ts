function classDecorato(
  constructor: any
){
  
}


@classDecorato
export class SuperClass {
  public myProperty: string = "Abc123";

  print(){
    console.log("Hello World")
  }
}

console.log(SuperClass)

const myClass = new SuperClass();
console.log(myClass)