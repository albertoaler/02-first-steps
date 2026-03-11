// We create the interface to specify what we will receive as props
interface Props {
  name: string,
  quantity?: number
}

// What's inside the () is called props of the component
export const ItemCounter = ({ name, quantity }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event)
    console.log(`Click ${name}`)
  }

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
      }}
    >
      <span style={{
        width: 150
      }}
      >
        {name}
      </span>
      <button onClick={handleClick}>+1</button>
      <span>{typeof quantity === 'number' ? quantity : 0}</span>
      <button>-1</button>
    </section>
  )
}
