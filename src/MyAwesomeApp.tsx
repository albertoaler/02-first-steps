import type { CSSProperties } from "react";

// We can create variables inside the function, but if they aren't gonna change, is recommended to put them outside
// to exclude them of the cycle of revision and execution of reacts
const firstName = 'Alberto';
const lastName = 'Aleman'

const favoriteGames = ['Assassins creed', 'God of war', 'Resident Evil']
const isActive = true

const address = {
  zipCode: 'ABC-123',
  country: 'México'
}

// We can create an object for the properties outside the component

const myStyles: CSSProperties = {
  backgroundColor: 'red',
  borderRadius: 10,
  padding: 10
}

export function MyAwesomeApp() {
  return (
    <div data-testid='my-awesome-app-id'>
      <h1 data-testid='first-name-title'> {firstName} </h1>
      <h3 data-testid='last-name-title'> {lastName} </h3>

      <p>{favoriteGames.join(', ')}</p>

      {/* everything inside the curly brackets is a JS expression so 2 + 2 without quotes will do the sum */}
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      {/* We use the object JSON to display the content of the address object */}
      {/* To use css style atribute is not like on HTML, we have to do double {} and use camelCase for the properties */}
      <p
        style={myStyles
          /*
          This is how to use it inside the component
          backgroundColor: 'red',
          borderRadius: 10,
          padding: 10
          */
        }
      >{JSON.stringify(address)}</p>
    </div>
  );
}