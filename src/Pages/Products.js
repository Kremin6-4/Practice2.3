import { CardDeck } from "react-bootstrap";
import Product from "../Components/Product";
import ProductsDate from "../data/date.json";

export default function Products() {
  return (
    <div>
      <h1>Our Products:</h1>
      <CardDeck>
        {ProductsDate.products.map((products, index) => {
          return <Product id={index} />;
        })}
      </CardDeck>
    </div>
  );
}
