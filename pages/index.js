import HeaderTag from "../components/HeaderTag";
import ProductList from "../components/ProductList";

export default function Home(props) {
  return (
    <>
      <HeaderTag
        header="Hello!! Welcome To Our Store"
        headerTag="Here Are Some Products"
      />

      <ProductList
        products={props.products}
        products_jewelery={props.products_jewelery}
        products_electronics={props.products_electronics}
        products_men={props.products_men}
        products_women={props.products_women}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const all = await fetch(`https://fakestoreapi.com/products`);
  const jew = await fetch(
    `https://fakestoreapi.com/products/category/jewelery`
  );
  const ele = await fetch(
    `https://fakestoreapi.com/products/category/electronics`
  );
  const men = await fetch(
    `https://fakestoreapi.com/products/category/men's clothing`
  );
  const women = await fetch(
    `https://fakestoreapi.com/products/category/women's clothing`
  );

  const products = await all.json();
  const products_jewelery = await jew.json();
  const products_electronics = await ele.json();
  const products_men = await men.json();
  const products_women = await women.json();

  return {
    props: {
      products,
      products_jewelery,
      products_electronics,
      products_men,
      products_women,
    },
  };
};
