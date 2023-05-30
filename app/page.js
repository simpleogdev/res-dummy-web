import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Card from "./components/Card";
import Shop from "./components/Shop";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Card />
      <Shop />
    </div>
  );
}
