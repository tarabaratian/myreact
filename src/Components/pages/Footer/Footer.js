import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer col-12 d-flex flex-row gap-2 flex-xl-nowrap col-wrap">
        <div className="spart col-xl-2 col-md-2 col-10 d-flex flex-column pt-xl-4">
          <p className="infotext">Contact Info</p>
          <h6>Address</h6>
          <p className="infotext2"> 123 Street, New York, USA</p>
          <h6>Email</h6>
          <p className="infotext2"> info@example.com</p>
          <h6>Telephone</h6>
          <p className="infotext2"> +012 345 67890</p>
          <p className="infotext2"> +012 345 67890</p>
        </div>

        <div
          className="tpart col-xl-1 col-md-1 col-10 d-flex flex-column pt-xl-4"
          style={{ paddingBottom: "20px" }}
        >
          <p className="infotext">Follow Us</p>
          <p className="infotext2">Faceboock</p>
          <p className="infotext2">Instagram</p>
          <p className="infotext2">Twitter</p>
        </div>
        <div
          className="tpart col-xl-3 col-xl-3 col-10 d-flex flex-column pt-xl-4"
          style={{ paddingBottom: "20px" }}
        >
          <p className="infotext">Schedule</p>
          <p className="infotext2">Monday: 09:00 am – 10:00 pm</p>
          <p className="infotext2">Saturday: 09:00 am – 08:00 pm</p>
          <p className="infotext2">Sunday: 09:00 am – 05:00 pm</p>
        </div>
        <div
          className="tpart col-xl-2 col-xl-2 col-10 d-flex flex-column pt-xl-4 "
          style={{ paddingBottom: "20px" }}
        >
          <p className="infotext">Pages</p>
          <p className="infotext2">
            <Link className="infotext2" to={"/"}>
              Home
            </Link>
          </p>
          <p className="infotext2">
            <Link className="infotext2" to={"/products"}>
              Products
            </Link>
          </p>
          <p className="infotext2">
            <Link className="infotext2" to={"/callus"}>
              Call us
            </Link>
          </p>
        </div>
        <div className="fpart col-xl-2 col-md-2 col-10 d-flex flex-column mb-5">
          <img
            src={require("./media/Wood Saws Logo Vintage, Illustration of Chainsaw Vector, Design of The Saw Concept Wooden_prev_ui.png")}
            alt=""
            className="img-fluid"
            style={{ width: "200px" }}
          />
          <p className="p-footer">
            Prestana Remereo wanted renovation, we simply delivered. Nullam quis
            risus eget urna mollis ornare vel leo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
