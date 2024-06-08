import { Link } from "react-router-dom";
const Allproducts = () => {
  return (
    <>
      <h3 className="cat text-dark mx-5">Our category</h3>
      <p className="text-dark mt-2 mx-5 text-sm-white">
        To display the products of each category, click on that category
      </p>
      <div className="col-12 p-5 d-flex flex-wrap">
        <div className="circlepro1 col-xl-2 col-md-3 col-10 d-flex">
          <div
            className="bg-white col-4 d-flex p-1"
            style={{
              height: "35px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              margin: "0px auto",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/products"}
            >
              Table
            </Link>
          </div>
        </div>
        <div className="circlepro2 col-xl-2 col-md-3 col-10 d-flex">
          <div
            className="bg-white col-4 d-flex p-1"
            style={{
              height: "35px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              margin: "0px auto",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/products"}
            >
              Sofa
            </Link>
          </div>
        </div>
        <div className="circlepro3 col-xl-2 col-md-3 col-10 d-flex">
          <div
            className="bg-white col-4 d-flex p-1"
            style={{
              height: "35px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              margin: "0px auto",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/products"}
            >
              Chair
            </Link>
          </div>
        </div>
        <div className="circlepro4 col-xl-2 col-md-3 col-10 d-flex">
          <div
            className="bg-white col-4 d-flex p-1"
            style={{
              height: "35px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              margin: "0px auto",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/products"}
            >
              Bed
            </Link>
          </div>
        </div>
        <div className="circlepro5 col-xl-2 col-md-3 col-10 d-flex">
          <div
            className="bg-white col-4 d-flex p-1"
            style={{
              height: "35px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              margin: "0px auto",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/products"}
            >
              Cloth
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproducts;
