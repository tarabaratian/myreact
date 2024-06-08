import { counter } from "@fortawesome/fontawesome-svg-core";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Showmore = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(1);
  const [proshow, setProshow] = useState(null);
  const fetchProshow = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await data.json();
    setProshow(res);
  };
  const add = () => {
    Swal.fire("Added to your shopping cart");
  };
  useEffect(() => {
    fetchProshow();
  }, [id, counter]);
  return (
    proshow && (
      <div
        style={{ paddingTop: "100px" }}
        className="col-10 offset-1 d-flex flex-row gap-3 justify-content-center flex-wrap"
      >
        <div style={{}} className="col-xl-5 col-10 d-flex ">
          <img
            className="col-10 offset-1 img-fluid"
            style={{ height: "600px", margin: "0px auto" }}
            src={proshow.image}
            alt=""
          />
        </div>
        <div
          style={{ backgroundColor: "" }}
          className="col-xl-4 col-10 px-2 rounded-5 p-3"
        >
          <h4>{proshow.title}</h4>
          <h5 style={{ color: "#40677E" }}>price : {proshow.price}$</h5>
          <p>({proshow.category})</p>
          <p>count : {proshow.rating.count}</p>
          <p>
            <h6>Product Description :</h6> {proshow.description}
          </p>
          <a
            style={{ fontSize: "18px", color: "gray", color: "#40677E" }}
            href=""
          >
            Product Specifications
          </a>
          <br />
          <div
            style={{
              height: "60px",
              width: "150px",
              border: "2px solid #40677E",
              borderRadius: "20px",
              justifyContent: "space-evenly",
              marginLeft: "10px",
              marginTop: "20px",
            }}
            className="d-flex align-items-center flex-row"
          >
            <button
              style={{
                border: "unset",
                fontSize: "25px",
                width: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#40677E",
              }}
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
            <h6
              style={{ fontSize: "22px", marginTop: "10px", color: "#40677E" }}
            >
              {counter}
            </h6>
            <button
              style={{
                border: "unset",
                fontSize: "30px",
                width: "20px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#40677E",
              }}
              onClick={() => setCounter(counter - 1)}
              disabled={counter <= 1}
            >
              -
            </button>
          </div>
          <Button
            style={{
              height: "35px",
              width: "150px",
              borderRadius: "15px",
              fontSize: "18px",
              marginLeft: "10px",
              marginBottom: "10px",
              padding: "0",
              zIndex: "99",
              marginTop: "20px",
            }}
            variant="outline-secondary"
            onClick={add}
          >
            <Link
              className="secondary"
              style={{
                textDecoration: "none",
              }}
            >
              Add to cart
            </Link>
          </Button>
        </div>
      </div>
    )
  );
};

export default Showmore;
