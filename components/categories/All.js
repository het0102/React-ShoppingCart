import ProductItem from "../ProductItem";
import Styles from "../../styles/Product.module.css";

const All = (props) => {
  return (
    <>
      <div className="mt-4 d-flex justify-content-end">
        Total Products : {props.products.length}
      </div>
      <div className={Styles.grid}>
        {props.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default All;
