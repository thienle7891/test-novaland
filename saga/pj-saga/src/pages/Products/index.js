import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import styles from "./styles.module.scss";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import Loading from "../Loading"
import { Link } from "react-router-dom";

const Products =() => {
  const filterList = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [filterBtn, setFilterBtn] = useState("all");
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter)
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const handleChangeFilter = (item) => {
    if (item === "all") {
        setFilter(data);

    } else {
        const listProduct = data.filter(x=> x.category === item);
        setFilter(listProduct);
    }
    setFilterBtn(item)
}
const ShowProducts = () => {
    return (
      <div>

        <Container maxWidth="md" className={styles.root}>
          <div className={styles.titleBlock}>
            <h1>Products</h1>
          </div>
          <hr></hr>
    
          <div className={styles.filter}>
            <div className={styles.filterBlock}>
              {filterList.map((item) => (
                <Button variant="contained" key={item}
                color={item === filterBtn ? "secondary" : "default"}
                  className={clsx(styles.btnFilter)}
                  onClick={()=> handleChangeFilter(item)}
                >
                  {`${item[0].toUpperCase()}${item.slice(1)}`}
                </Button>
              ))}
            </div>
          </div>
          <Grid container spacing={1} style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "row",
            }}>
            {filter.map((product) => (
              <Grid key={product.id} 
                item xs={12} sm={6} md={4} lg={3} 
              >
                <div className={styles.wrapperProduct}>
    
                  <div className={styles.paper}>
                    <img
                      src={product.image}
                      className={styles.cardImg}
                      alt={product.title}
                      style={{ margin: "auto" }}
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <h5 className={styles.cardTitle}>
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className={styles.cardText}>${product.price}</p>
                  </div>
                  <Link to={`/products/${product.id}`} className={styles.linkBuy}>
                    <Button variant="contained" color="primary" className={styles.btnBuy}>
                      Buy now
                    </Button>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    
    );
  }

    return (
      <div>
          <div>
              {loading ? <Loading/> : <ShowProducts/>}
          </div>
      </div>
    )
}

export default Products;
