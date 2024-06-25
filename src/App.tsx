import { } from 'react';
import { Button, Text } from './ui/';

function App() {

  return (
    <div>
      <h1 className='bg-green-200 p-2'>Hello Vite</h1>
      <Button 
        className='text-blue-500 border-double border-4 p-4 m-1 bg-blue-50'
        label='Click me' 
        onClick={() => console.log("click..")} 
      />
      <Button 
        className='text-green-500 border-double border-4 rounded-3xl p-4 m-1 bg-green-50'
        label='Click me' 
      />
      <Button 
        className='text-red-600 border-double border-4 p-4 m-1 bg-red-50'
        label='Click me' 
      />
      <Text>Tekst przykładowy.</Text>
    </div>
  )
}

export default App
