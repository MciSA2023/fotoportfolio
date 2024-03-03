import Picture from "../modelle/picture";

const pictures = [
  new Picture(0,require(`../img/DSC0.jpeg`), 'Nature', 'germany', 'landscape'),
  new Picture(1,require(`../img/DSC1.JPG`), 'Street', 'germany', 'portrait'),
  new Picture(2,require(`../img/DSC3.JPG`), 'Night-Street', 'New York', 'landscape'),
];

export default pictures;