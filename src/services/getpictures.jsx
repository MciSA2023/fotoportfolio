import Picture from "../modelle/picture";

const pictures = [
  new Picture(0,require(`../img/DSC0.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(1,require(`../img/DSC1.JPG`), 'Street', 'germany', 'portrait'),
  new Picture(2,require(`../img/DSC2.JPG`), 'Night-Street', 'New York', 'portrait'),
  new Picture(3,require(`../img/DSC3.JPG`), 'Street', 'Washington', 'landscape'),
  new Picture(4,require(`../img/DSC4.JPG`), 'Landscape', 'Zurich', 'landscape'),
  new Picture(5,require(`../img/DSC5.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(6,require(`../img/DSC6.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(7,require(`../img/DSC7.JPG`), 'Nature', 'Zurich', 'portrait'),
  new Picture(8,require(`../img/DSC8.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(9,require(`../img/DSC9.JPG`), 'Street', 'New York', 'portrait'),
  new Picture(10,require(`../img/DSC10.JPG`), 'Nature', 'New York', 'portrait'),
]

const lowpictures = [
  new Picture(0,require(`../img/LowRes/DSC0.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(1,require(`../img/LowRes/DSC1.JPG`), 'Street', 'germany', 'portrait'),
  new Picture(2,require(`../img/LowRes/DSC2.JPG`), 'Night-Street', 'New York', 'portrait'),
  new Picture(3,require(`../img/LowRes/DSC3.JPG`), 'Street', 'Washington', 'landscape'),
  new Picture(4,require(`../img/LowRes/DSC4.JPG`), 'Landscape', 'Zurich', 'landscape'),
  new Picture(5,require(`../img/LowRes/DSC5.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(6,require(`../img/LowRes/DSC6.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(7,require(`../img/LowRes/DSC7.JPG`), 'Nature', 'Zurich', 'portrait'),
  new Picture(8,require(`../img/LowRes/DSC8.JPG`), 'Nature', 'Zurich', 'landscape'),
  new Picture(9,require(`../img/LowRes/DSC9.JPG`), 'Street', 'New York', 'portrait'),
  new Picture(10,require(`../img/LowRes/DSC10.JPG`), 'Nature', 'New York', 'portrait'),
];

export {pictures};
export default lowpictures;