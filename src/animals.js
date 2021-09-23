/* eslint max-classes-per-file: "off" */

// animal classi olusturuldugu yer
class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}
// Dog classi animal classini extends ediyor
class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
// duck classi animali extend ediyor
class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}
const dog1 = new Dog('Wargowie', 'https://placedog.net/300/300?id=15', 4, 15);
const dog2 = new Dog('Rıfkı', 'https://placedog.net/300/300?id=11', 4, 3);
const dog3 = new Dog('Hukka', 'https://placedog.net/300/300?id=12', 4, 26);
const dog4 = new Dog('Garip Kont', 'https://placedog.net/300/300?id=13', 4, 8);
const dog5 = new Dog('Matriarch', 'https://placedog.net/300/300?id=14', 4, 99);
const dogs = [dog1, dog2, dog3, dog4, dog5];
const duck1 = new Duck(
  'The Grey One',
  'https://m.media-amazon.com/images/S/aplus-media/sc/88c089df-7a2c-4cbf-9c8a-f4454ec82992.__CR0,100,800,800_PT0_SX300_V1___.jpg',
  2,
  240
);
const duck2 = new Duck(
  'Lurtz',
  'https://m.media-amazon.com/images/S/aplus-media/sc/38623364-a80e-4e94-b826-c4c82b6aecc5.__CR0,0,2000,2000_PT0_SX300_V1___.jpg',
  2,
  1
);
const duck3 = new Duck(
  'Legolas',
  'https://m.media-amazon.com/images/S/aplus-media/sc/91bdcad5-b1fc-4410-9a1f-5da19b14e4d6.__CR0,100,800,800_PT0_SX300_V1___.jpg',
  2,
  293
);
const duck4 = new Duck(
  'Galadriel',
  'https://cdn.shopify.com/s/files/1/1114/0068/products/Galadriel-Amazon-WB-1_300x.jpg?v=1616573400',
  2,
  51
);
const duck5 = new Duck(
  'Gollum',
  'https://m.media-amazon.com/images/S/aplus-media/sc/050242a8-ce08-4cbd-b875-5e6bdcd5bcf0.__CR0,0,1000,1000_PT0_SX300_V1___.jpeg',
  2,
  87
);
const duck6 = new Duck(
  'Arwen',
  'https://m.media-amazon.com/images/S/aplus-media/sc/b68e53b9-c608-48da-9cbd-6728ff844497.__CR0,0,1000,1000_PT0_SX300_V1___.jpeg',
  2,
  155
);
const ducks = [duck1, duck2, duck3, duck4, duck5, duck6];
const animalList = [...ducks, ...dogs];
export { animalList as default };
