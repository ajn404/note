interface TFAnimal {
  dateOfBirth: any;
}

interface TFSDog extends TFAnimal {
  breed: any;
}

class TFAnimalHouse {
  resident: TFAnimal;
  constructor(TFAnimal: TFAnimal) {
    this.resident = TFAnimal;
  }
}

class TFSDogHouse extends TFAnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: TFSDog;
  constructor(dog: TFSDog) {
    super(dog);
  }
}

let tfa: TFSDog = {
  breed: 'ddd',
  dateOfBirth: '12312'
}

let x = new TFSDogHouse(tfa)
console.log(x);
