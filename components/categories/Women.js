import ProductItem from "../ProductItem";
import Styles from "../../styles/Product.module.css";

const Women = (props) => {
  return (
    <>
      <div className="mt-4 d-flex justify-content-end">
        Total Products : {props.products_women.length}
      </div>
      <div className={Styles.grid}>
        {props.products_women.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Women;
