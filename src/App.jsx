import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import ErrorPage from "./components/Pages/ErrorPage";
import SignUp from "./components/Pages/SignUp";
import Home from "./components/Pages/Home";
import LoginPage from "./components/Pages/LoginPage";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import AllProducts from "./components/common/AllProducts";
import ProductDetails from "./components/Pages/Details/ProductDetails";
import CustomModal from "./CustomModal";
import { ProductsProvider } from "./ProductsContext";

const allProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    secondaryPrice: "$200",
    rating: 4,
    viewers: "(88)",
    discount: "-40%",
    src: "https://i.ibb.co/vhHqBcS/g-colored.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    secondaryPrice: "$1160",
    rating: 3,
    viewers: "(77)",
    discount: "-35%",
    src: "https://i.ibb.co/ykcB5xF/keyboard.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    secondaryPrice: "$400",
    rating: 5,
    viewers: "(55)",
    discount: "-45%",
    src: "https://i.ibb.co/XSHfSRp/tv.png",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: "$375",
    secondaryPrice: "$400",
    rating: 4,
    viewers: "(48)",
    discount: "-55%",
    src: "https://i.ibb.co/b7XBTzC/chair.png",
  },
  {
    id: 5,
    name: "Small Bookshelf",
    price: "$360",
    secondaryPrice: "$500",
    rating: 3,
    viewers: "(60)",
    discount: "-32%",
    src: "https://i.ibb.co/Q8skZbd/bookself.png",
  },
  {
    id: 6,
    name: "Kids Electric Car",
    price: "$150",
    secondaryPrice: "$300",
    rating: 4,
    viewers: "(100)",
    discount: "-44%",
    src: "https://i.ibb.co/tptTxBm/car.png",
  },
  {
    id: 7,
    name: "The North Coat",
    price: "$260",
    secondaryPrice: "$360",
    rating: 4,
    viewers: "(70)",
    discount: "-10%",
    src: "https://i.ibb.co/gFqKBqC/coat.png",
  },
  {
    id: 8,
    name: "Breed Dry Dog Food",
    price: "$100",
    secondaryPrice: "$150",
    rating: 4,
    viewers: "(75)",
    discount: "-5%",
    src: "https://i.ibb.co/VW17W9m/dogfood.png",
  },
  {
    id: 9,
    name: "GP11 Shooter USB Gamepad",
    price: "$200",
    secondaryPrice: "$300",
    rating: 5,
    viewers: "(86)",
    discount: "-15%",
    src: "https://i.ibb.co/1R3Q6gw/g-black.png",
  },
  {
    id: 10,
    name: "RGB Liquid CPU Cooler",
    price: "$200",
    secondaryPrice: "$300",
    rating: 4,
    viewers: "(90)",
    discount: "-9%",
    src: "https://i.ibb.co/6rqN1qp/headphones.png",
  },
  {
    id: 11,
    name: "Gucci Duffle Bag",
    price: "$120",
    rating: 4,
    viewers: "(88)",
    discount: "-40%",
    src: "https://i.ibb.co/Pc5B0mh/bag.png",
  },
  {
    id: 12,
    name: "Quilted Satin Jacket",
    price: "$960",
    rating: 3,
    viewers: "(77)",
    discount: "-35%",
    src: "https://i.ibb.co/XFXBHxk/jacket.png",
  },
  {
    id: 13,
    name: "Women's Collections",
    price: "$370",
    rating: 5,
    viewers: "(55)",
    discount: "-45%",
    src: "https://i.ibb.co/cvY0vyP/women-Collections.png",
  },
  {
    id: 14,
    name: "perfume",
    price: "$375",
    rating: 4.5,
    viewers: "(48)",
    discount: "-55%",
    src: "https://i.ibb.co/7gQVCQh/perfume.png",
  },
  {
    id: 15,
    name: "Curology Product Set",
    price: "$360",
    rating: 3.7,
    viewers: "(60)",
    discount: "-32%",
    src: "https://i.ibb.co/Y3g2XKP/cream.png",
  },
  {
    id: 16,
    name: "CANON EOS DSLR Camera",
    price: "$150",
    rating: 4.8,
    viewers: "(100)",
    discount: "-44%",
    src: "https://i.ibb.co/pd7Nz9S/camera.png",
  },
  {
    id: 17,
    name: "ASUS FHD Gaming Laptop",
    price: "$260",
    rating: 4.2,
    viewers: "(70)",
    discount: "-10%",
    src: "https://i.ibb.co/GRJTPdj/labtop.png",
  },
  {
    id: 18,
    name: "JBL Boombox 2",
    price: "$100",
    rating: 4.1,
    viewers: "(75)",
    discount: "-5%",
    src: "https://i.ibb.co/zr8Sdxs/JBL-BOOMBOX.png",
  },
  {
    id: 19,
    name: "Football Shoes",
    price: "$200",
    rating: 4.6,
    viewers: "(86)",
    discount: "-15%",
    src: "https://i.ibb.co/9gR7K9M/shoes.png",
  },
  {
    id: 20,
    name: "Speaker",
    price: "$200",
    rating: 4.9,
    viewers: "(90)",
    discount: "-9%",
    src: "https://i.ibb.co/WFSLHqj/speakers.png",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <AllProducts type="all" display="vertical" />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails products={allProducts} />,
      },
    ],
  },
]);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ProductsProvider>
      <CustomModal isOpen={isModalOpen} closeModal={closeModal} />
      <RouterProvider router={router} />
    </ProductsProvider>
  );
}

export default App;
