import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchKeyword = useSelector((state) => state.product.searchKeyword);

  console.log(cat, "search for products");
  console.log(products, "products");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => item.category === cat)
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      {cat && filteredProducts.length === 0 ? <div style={{ textAlign: "center", fontSize: "30px", marginTop: "100px" }}>No products</div> : null}
      <Container>
        {cat
          ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products
            .map((item) => <Product item={item} key={item.id} />)}
      </Container>

      {searchKeyword ? <div style={{
        position: "absolute",
        top: "90px",
        left: "0",
        backgroundColor: "white",
      }}>
        <Container>
          {products.filter((item) => item.title.toLowerCase().includes(searchKeyword.toLowerCase()))
            .map((item) => <Product item={item} key={item.id} />)}
        </Container>
      </div> : null}
    </>
  );
};

export default Products;
