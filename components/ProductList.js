import { Tabs, Tab } from 'react-bootstrap'
import All from "./categories/All";
import Mens from "./categories/Mens";
import Women from "./categories/Women";
import Electronics from "./categories/Electronics";
import Jewelery from "./categories/Jewelery";

const ProductList = (props) => {
  return (
    <>
      <Tabs className="mt-3" defaultActiveKey="all" id="uncontrolled-tab-example">
        <Tab eventKey="categories" title="Categories : " disabled></Tab>
        <Tab eventKey="all" title="All">
          <All products={props.products} />
        </Tab>
        <Tab eventKey="men's clothing" title="Men's clothing">
          <Mens products_men={props.products_men} />
        </Tab>
        <Tab eventKey="women's clothing" title="Women's clothing">
          <Women products_women={props.products_women} />      
        </Tab>
        <Tab eventKey="electronics" title="Electronics">
           <Electronics products_electronics={props.products_electronics} />      
        </Tab>
        <Tab eventKey="jewelery" title="Jewelery">
          <Jewelery products_jewelery={props.products_jewelery} />
        </Tab>
      </Tabs>   
    </>
  );
};

export default ProductList;
