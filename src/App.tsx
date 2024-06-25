import { } from 'react';
import { Button, Text } from './ui/';

function App() {

  return (
    <div>
      <h1 className='bg-green-200 p-2'>Hello Vite</h1>
      <Button label='Click me' onClick={() => console.log("click..")} />
      <Text>Tekst przykładowy.</Text>
    </div>
  )
}

export default App
