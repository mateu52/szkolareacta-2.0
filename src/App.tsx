import { } from 'react';
//import { Button, Text } from './ui/';
//import { Paragraph } from './ui/Paragraph';
//import { Timer } from './ui/Timer';
import { Generator } from './components/Generator';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './ui/Layout';
import { Paragraph } from './ui/Paragraph';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path: "/Generator",
        element: <Generator />
      },
      {
        path: "/form",
        element: <Paragraph>Parag...</Paragraph>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} fallbackElement={<p>Initial Load..</p>} />
      {/* <h1 className='bg-green-200 p-2'>Hello Vite</h1> */}
   {/* zad1 mod2   <Generator /> */}
      
      {/* <Timer />
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
      <Button 
        label='disable true'  className='border-4 p-4 m-1 disabled:bg-slate-400' disabled={true}
      />
      <Text>Tekst przykładowy.</Text>
      <Paragraph contentEditable={true} className='pt-5 text-m font-extrabold' >ComponentProps</Paragraph>
      <Paragraph className='text-2xl underline font-extralight bg-red-400	' >ComponentProps 2</Paragraph> */}
    </div>
  )
}

export default App
