import { useState } from "react";



// import './ItemCounter.css'
import styles from './ItemCounter.module.css';

// We create the interface to specify what we will receive as props
interface Props {
  name: string,
  quantity?: number;
}

// What's inside the () is called props of the component
export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  // Hooks go into the first line of the component, before declarations and before return
  // useState is a Hook that react provide us, it is an array of two items
  // count is the 'value' and setCount is the function to change it
  const [count, setCount] = useState(quantity);

  // because count is a constant, we can not do. React handles the value changing
  // count++

  // function to increment the count
  const handleAdd = () => {
    // Every time setCount is called, React re-renders the component
    // This doesn't affect the performance (excepting some cases)
    // React handles all that problem, that's why it is a library
    // You don't need to know 'how' it is done (except you are curious and have time)
    setCount(count + 1);
  };

  // function to subtract the count
  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
  };

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   console.log(event)
  //   console.log(`Click ${name}`)
  // }

  return (
    <section
      className={styles['item-row']}
    // style={{
    //  display: 'flex',
    //  alignItems: 'center',
    //  gap: 10,
    //  marginTop: 10
    //}}
    >
      <span
        className={styles.itemText}
        style={{
          color: count === 1 ? 'red' : 'black'
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};
