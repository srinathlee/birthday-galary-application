import Galary from "./components/galary";
import Home from "./components/home";
import Navbar from './components/navbar'
import Footer from "./utils/footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"


const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer/>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/galary",
        element: <Galary />,
      },
      
     
    ],
  },
]);


function App() {
  return (
    <div className="App">
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
