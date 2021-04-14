import product1 from '../../images/product-1.jpg';
import product2 from '../../images/wings.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/slushdone.jpg';
import sweet2 from '../../images/sweet.jpg';
import sweet3 from '../../images/sweet-1.jpg';

export const productData = [
  {
    
    img: product1, //this is imported from above like this: import product1 from '../../images/product-1.jpg';

    alt: 'Pizza', 
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$19.99',
    button: 'Add to Cart'
  },
  {
    img: product2,
    alt: 'Wings',
    name: 'Hawaiian Wings',
    desc:
      ' Marinara sauce, basil, italian sausage, red chillies, olives, and pesto',
    price: '$16.99',
    button: 'Add to Cart'
  },
  {
    img: product3,
    alt: 'Pizza',
    name: 'Veggie Overload',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '$14.99',
    button: 'Add to Cart'
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    price: '$5.99',
    button: 'Add to Cart'
  },
  {
    img: sweet3,
    alt: 'Ice Cream',
    name: 'Caramel Wonder',
    desc:
      'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    price: '$4.99',
    button: 'Add to Cart'
  },
  {
    img: sweet1,
    alt: 'Kiwi Strawberry',
    name: 'Kiwi Strawberry',
    desc:
      'A kiwi strawberry drink with cold ice and some fruits',
    price: '$4.99',
    button: 'Add to Cart'
  }
];
