import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, FormControl, Form } from "react-bootstrap";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import { listProducts, listProductsSort } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ProductCaousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const [sort, setSort] = useState("rec");

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  useEffect(() => {
    dispatch(listProductsSort(sort));
  }, [sort]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCaousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="align-items-center px-4 p-2">
            <h1>Products</h1>

            <Form.Group className="ml-auto">
              <Form.Label>Sort By</Form.Label>
              <FormControl
                as="select"
                onChange={(e) => setSort(e.target.value)}
                value={sort}
              >
                <option value="rec">Recommended</option>
                <option value="pop">Popularity</option>
                <option value="asc">Price, lowest first</option>
                <option value="desc">Price, highest first</option>
                <option value="az">Brand A to Z</option>
                <option value="za">Brand Z to A</option>
              </FormControl>
            </Form.Group>
          </Row>

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
