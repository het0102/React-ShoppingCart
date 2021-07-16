import ProductItem from "../ProductItem";
import Styles from "../../styles/Product.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actFetchProductsRequest } from "../../actions/index";
import React, { useEffect } from "react";

const All = () => {
  const dispatch = useDispatch();
  const _products = useSelector((state) => state.Todoreducers._products);

  useEffect(() => {
    dispatch(actFetchProductsRequest());
  }, [dispatch]);

  return (
    <>
      <div className="mt-4 d-flex justify-content-end">
        Total Products : {_products.length}
      </div>
      <div className={Styles.grid}>
        {_products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default All;
