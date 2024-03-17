import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);
  const [rate, setRate] = useState(null);
  const [description, setDescription] = useState(null);
  const [stuff, setStuff] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const fetchStuff = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setStuff(res);
      setLoading(false);
      setError("");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchStuff();
  }, []);
  return (
    <>
      <div
        style={{ textAlign: "center", paddingTop: "100px" }}
        className="listing col-12"
      >
        <h2>Product Listing</h2>
        <p>Showing 20 of 100 products</p>
      </div>
      <div className="pr col-12 d-flex">
        {stuff &&
          stuff.map((elem, index) => {
            return (
              <div
                style={{ height: "" }}
                className="back col-xl-2 col-md-4 col-10 d-flex flex-column mx-5 my-4 justify-content-start pt-1 rounded-4"
              >
                <img
                  src={elem.image}
                  style={{
                    height: "240px",
                    width: "230px",
                    borderRadius: "20px",
                    marginLeft: "12px",
                  }}
                  className="imh-fluid"
                  alt=""
                />
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "left",
                    color: "#3B3B3B",
                  }}
                >
                  {elem.title.substr(0, 20)}...
                </p>
                <p style={{ marginLeft: "10px", color: "#3B3B3B" }}>
                  price : {elem.price}$
                </p>
                <p style={{ marginLeft: "10px", color: "#3B3B3B" }}>
                  rate : {elem.rating.rate}
                </p>
                <p style={{ marginLeft: "10px", color: "#3B3B3B" }}>
                  {elem.description.substr(0, 50)}...
                </p>
                <Button
                  style={{
                    height: "35px",
                    width: "100px",
                    borderRadius: "15px",
                    fontSize: "15px",
                    marginLeft: "10px",
                    marginBottom: "10px",
                    padding: "0",
                    zIndex: "99",
                  }}
                  variant="outline-light"
                >
                  <Link
                    className="light"
                    style={{
                      textDecoration: "none",
                    }}
                    to={`/${elem.id}`}
                  >
                    See more
                  </Link>
                </Button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
