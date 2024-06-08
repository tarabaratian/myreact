import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Callus = () => {
  const btnsubmit = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your information has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div className="content">
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#16161D",
              fontFamily: "sans-serif",
            }}
            to="/"
          >
            Home{" "}
          </Link>{" "}
          /
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#16161D",
              fontFamily: "sans-serif",
            }}
            to="/"
          >
            Products{" "}
          </Link>{" "}
          /
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#72756E",
              fontFamily: "sans-serif",
            }}
            to="/callus"
          >
            Call us{" "}
          </Link>
        </div>
      </div>
      <div
        className="elements flex-md-wrap flex-sm-wrap flex-wrap"
        style={{ width: "100%", height: "610px", backgroundColor: "#AB957E" }}
      >
        <div className="textcall col-xl-4 col-12 mx-xl-5">
          <h2
            style={{
              marginBottom: "15px",
              marginTop: "10px",
              fontSize: "40px",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "23px",
              textAlign: "justify",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <a style={{ textDecoration: "none", color: "#CABDAE" }} href="">
              Download Now.
            </a>
          </p>
        </div>
        <div className="formcall col-xl-6 col-12 p-5">
          <form action="">
            <div className="bgform d-flex mt-5 flex-row flex-wrap">
              <h3>Do You have Any Questions?</h3>
              <label htmlFor="FullNmae" className="mb-3"></label>
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "15px",
                  border: "1px solid white",
                  padding: "10px",
                  margin: "10px",
                }}
                type="text"
                placeholder="Full Name"
              />
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "15px",
                  border: "1px solid white",
                  padding: "10px",
                  margin: "10px",
                }}
                type="email"
                placeholder="Email"
              />
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "15px",
                  border: "1px solid white",
                  padding: "10px",
                  margin: "10px",
                }}
                type="text"
                placeholder="Phone Number"
              />
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "15px",
                  border: "1px solid white",
                  padding: "10px",
                  margin: "10px",
                }}
                type="text"
                placeholder="Subject"
              />
              <textarea
                placeholder="your message"
                style={{
                  height: "100px",
                  resize: "none",
                  width: "300px",
                  borderRadius: "15px",
                  border: "1px solid white",
                  padding: "10px",
                  margin: "11px",
                }}
              ></textarea>
              <Button
                style={{
                  height: "50px",
                  width: "300px",
                  borderRadius: "15px",
                  marginTop: "12px",
                  marginLeft: "10px",
                  fontSize: "18px",
                }}
                onClick={btnsubmit}
                variant="outline-secondary"
              >
                Submit
              </Button>{" "}
            </div>
          </form>
        </div>
      </div>
      <div className="info bg-white flex-wrap pt-sm-5">
        <div
          className="infos col-xl-3 col-10 bg-white p-3"
          style={{ border: "1px solid #CABDAE", borderRadius: "20px" }}
        >
          <h3>Address</h3>
          <p>123 North tower New York, USA</p>
        </div>
        <div
          className="infos col-xl-3 col-10 bg-white p-3"
          style={{ border: "1px solid #CABDAE", borderRadius: "20px" }}
        >
          <h3>Mail Us</h3>
          <p>info@example.com</p>
        </div>
        <div
          className="infos col-xl-3 col-10 bg-white p-3"
          style={{ border: "1px solid #CABDAE", borderRadius: "20px" }}
        >
          <h3>Telephone</h3>
          <p>(+012) 3456 7890 123</p>
        </div>
      </div>
    </>
  );
};

export default Callus;
