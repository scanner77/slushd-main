import product1 from '../../images/2malibu-glasses.png';
import product2 from '../../images/SlushD-Green-Apple.png';
import product3 from '../../images/SlushD-Strawberry.png';
import sweet1 from '../../images/SlushD-GA-w-SPK.png';
import sweet2 from '../../images/SlushD-blue-w-Nerds.png';
import sweet3 from '../../images/SlushD-SB-w-GB.png';

export const productData = [
  {
    
    img: product1, //this is imported from above like this: import product1 from '../../images/product-1.jpg';

    alt: '2 Drinks', 
    name: 'Mixed Drink',
    desc:
      'Shown here are two of the different variety of mixed drinks we offer.',
    price: '$10 Each',
    button: 'View'
  },
  {
    img: product2,
    alt: 'Green Apple',
    name: 'Green Apple Slush',
    desc:
      ' A plain green apple flavored slush served with or without alcohol',
    price: '$10',
    button: 'View'
  },
  {
    img: product3,
    alt: 'Strawberry',
    name: 'Strawberry Slush',
    desc:
      ' A plain strawberry slush served with or without alcohol',
    price: '$10',
    button: 'View'
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Blue w nerds',
    name: 'Blue with Nerds candy',
    desc:
      'A delicious blue slush with everclear topped with sour Nerds candy',
    price: '$10',
    button: 'View'
  },
  {
    img: sweet3,
    alt: 'SB w GB',
    name: 'Strawberry with gummy bears',
    desc:
      'Strawberry flavored slush topped with gummy bears',
    price: '$10',
    button: 'View'
  },
  {
    img: sweet1,
    alt: 'GA w SPK',
    name: 'Green Apple with SPK',
    desc:
      'Green apple flavored with Sour Patch Kids candy',
    price: '$10',
    button: 'View'
  }
];
