import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string,
  quantity?: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 2 },
  { productName: 'Pro Controller', quantity: 1 },
  { productName: 'Super Smash', quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {/* We can use the map method to display the number of the items in the array, but we need to stablish a unique key
        Because we are working with a 'shopping cart' productNames wouldn't have to be the same */}
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}

      {/* <ItemCounter name='Nintendo Switch 2' quantity={1} />
      <ItemCounter name='Pro controller' quantity={2} />
      <ItemCounter name='Super Smash' quantity={1} /> */}
    </>
  );
}