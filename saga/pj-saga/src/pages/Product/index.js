import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "../Loading"

import styles from "./styles.module.scss";

const Product = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const handleAddCart = () => {

  }

  const ShowProduct = () => {

    return (
      <div className={styles.product}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={styles.productImg}>
            <img src={product.image} alt={product.title} width="70%" />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={styles.productInfor}>
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <p>
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star" />
            </p>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
            
            <Button variant="contained" color="primary"
              onClick={() => handleAddCart(product)}
            >
              Add to cart
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
// ----render
  return (
    <div>
        <div>
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
    </div>
  )


};

export default Product;
