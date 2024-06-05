import { createContext, useState } from "react";

const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      secondaryPrice: "$200",
      rating: 4,
      viewers: "(88)",
      discount: "-40%",
      src: "https://i.ibb.co/vhHqBcS/g-colored.png",
      details:
        "Revolutionize your gaming with our latest GamePad. Elevate your skills with ergonomic design and responsive controls.",
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
      details:
        "Enhance your productivity with our Wired Keyboard. Experience seamless typing with tactile feedback and durable construction.",
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
      details:
        "Immerse yourself in stunning visuals with our Gaming Monitor. Elevate your gaming experience with crystal-clear display and fast response time.",
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
      details:
        "Sink into relaxation with our Comfort Chair. Experience ultimate comfort and support for your body, perfect for long hours of sitting.",
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
      details:
        "Organize with ease using our Small Bookshelf. Compact yet spacious, ideal for storing books and displaying small decor items.",
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
      details:
        "Let your little one cruise in style with our Kids Electric Car, providing endless fun and excitement.",
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

      details:
        "Stay warm and stylish with The North Coat, a classic winter essential for your outdoor adventures.",
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
      details:
        "Keep your furry friend healthy and satisfied with Breed Dry Dog Food, specially formulated for their nutritional needs.",
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
      details:
        "Enhance your gaming experience with the GP11 Shooter USB Gamepad, designed for precision control and comfortable grip.",
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

      details:
        "Keep your CPU cool and stylish with the RGB Liquid CPU Cooler, featuring vibrant colors and efficient cooling performance.",
    },
    {
      id: 11,
      name: "Gucci Duffle Bag",
      price: "$120",
      rating: 4,
      viewers: "(88)",
      discount: "-40%",
      src: "https://i.ibb.co/Pc5B0mh/bag.png",
      details:
        "Travel in luxury with the Gucci Duffle Bag, crafted from premium materials and adorned with iconic branding.",
    },
    {
      id: 12,
      name: "Quilted Satin Jacket",
      price: "$960",
      rating: 3,
      viewers: "(77)",
      discount: "-35%",
      src: "https://i.ibb.co/XFXBHxk/jacket.png",

      details:
        "Elevate your style with our Quilted Satin Jacket, featuring a luxurious satin finish and timeless quilted design.",
    },
    {
      id: 13,
      name: "Women's Collections",
      price: "$370",
      rating: 5,
      viewers: "(55)",
      discount: "-45%",
      src: "https://i.ibb.co/cvY0vyP/women-Collections.png",
      details:
        "Explore the latest trends with our Women's Collections, curated to elevate your wardrobe with versatile pieces.",
    },
    {
      id: 14,
      name: "perfume",
      price: "$375",
      rating: 4.5,
      viewers: "(48)",
      discount: "-55%",
      src: "https://i.ibb.co/7gQVCQh/perfume.png",
      details:
        "Indulge your senses with our exquisite Perfume collection, offering an array of captivating fragrances.",
    },
    {
      id: 15,
      name: "Curology Product Set",
      price: "$360",
      rating: 3.7,
      viewers: "(60)",
      discount: "-32%",
      src: "https://i.ibb.co/Y3g2XKP/cream.png",

      details:
        "Revitalize your skincare routine with our Curology Product Set, tailored to address your unique skincare needs.",
    },
    {
      id: 16,
      name: "CANON EOS DSLR Camera",
      price: "$150",
      rating: 4.8,
      viewers: "(100)",
      discount: "-44%",
      src: "https://i.ibb.co/pd7Nz9S/camera.png",

      details:
        "Capture life's moments in stunning detail with our CANON EOS DSLR Camera, designed for professional-grade photography enthusiasts.",
    },
    {
      id: 17,
      name: "ASUS FHD Gaming Laptop",
      price: "$260",
      rating: 4.2,
      viewers: "(70)",
      discount: "-10%",
      src: "https://i.ibb.co/GRJTPdj/labtop.png",

      details:
        "Elevate your gaming experience with the ASUS FHD Gaming Laptop, featuring high-performance specs and immersive visuals for unparalleled gameplay.",
    },
    {
      id: 18,
      name: "JBL Boombox 2",
      price: "$100",
      rating: 4.1,
      viewers: "(75)",
      discount: "-5%",
      src: "https://i.ibb.co/zr8Sdxs/JBL-BOOMBOX.png",
      details:
        "Experience booming sound with the JBL Boombox 2, a portable Bluetooth speaker that delivers powerful bass and long-lasting battery life for all-day entertainment.",
    },
    {
      id: 19,
      name: "Football Shoes",
      price: "$200",
      rating: 4.6,
      viewers: "(86)",
      discount: "-15%",
      src: "https://i.ibb.co/9gR7K9M/shoes.png",
      details:
        "Step onto the field with confidence in our Football Shoes, designed for optimal performance and agility on the pitch.",
    },
    {
      id: 20,
      name: "Speaker",
      price: "$200",
      rating: 4.9,
      viewers: "(90)",
      discount: "-9%",
      src: "https://i.ibb.co/WFSLHqj/speakers.png",
      details:
        "Experience immersive sound quality with our Speaker, delivering crystal-clear audio for your favorite music and movies.",
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
