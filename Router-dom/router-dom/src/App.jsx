
import About from './Component/About'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  const router = createBrowserRouter([{

    path: "/",
    element: <><Navbar /><Home /></>,
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
