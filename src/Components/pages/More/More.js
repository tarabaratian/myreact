import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const More = () => {
  const [Packages, setPackages] = useState([]);
  const fetchPackages = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setPackages(res.slice(8, 14));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPackages();
  }, []);
  return (
    <>
      <div className="col-12 mt-5 d-flex flex-wrap justify-content-center gap-2 mb-5">
        {Packages.map((elem, index) => {
          return (
            <>
              <div className="border col-xl-5 col-10 d-flex justify-content-left flex-row rounded-4 pt-1">
                <img
                  src={elem.image}
                  alt=""
                  style={{
                    height: "180px",
                    borderRadius: "20px 0 0 20px ",
                    marginLeft: "10px",
                  }}
                  className="col-xl-3 col-md-3 col-5"
                />
                <div className="title col-7 mx-3 mt-2">
                  <p className="title">{elem.title.substr(0, 25)}...</p>
                  <p className="description">
                    {elem.description.substr(0, 100)}...
                  </p>
                  <p className="price">
                    price: {elem.price}
                    <br />
                    {elem.rating.rate}
                    <br />
                    {elem.rating.count}
                  </p>
                  <Button
                    style={{
                      height: "35px",
                      width: "75px",
                      borderRadius: "15px",
                      fontSize: "15px",
                      marginBottom: "10px",
                      padding: "0",
                    }}
                    variant="outline-secondary"
                  >
                    <Link
                      className="link"
                      style={{
                        textDecoration: "none",
                      }}
                      to={`/${elem.id}`}
                    >
                      See more
                    </Link>
                  </Button>{" "}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default More;
