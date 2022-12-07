class ConstructorStore {
    constructor(x: string)
    constructor(x: number, y: number)
    constructor(x?, y?) {}
  }
   
  new  ConstructorStore('hello')
  new  ConstructorStore(1, 2)