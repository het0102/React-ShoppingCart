import ProductItem from "../ProductItem";
import Styles from "../../styles/Product.module.css";

const Electronics = (props) => {
  return (
    <>
      <div className="mt-4 d-flex justify-content-end">
        Total Products : {props.products_electronics.length}
      </div>
      <div className={Styles.grid}>
        {props.products_electronics.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Electronics;
