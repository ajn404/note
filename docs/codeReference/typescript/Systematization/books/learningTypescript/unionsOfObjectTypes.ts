const poem =
  Math.random() > 0.5
    ? {
        name: "ajn404",
        age: 111,
      }
    : {
        rhymes: true,
        name: "ajn403",
      };

poem.name;
poem.rhymes;
poem.age;
console.log(poem);
