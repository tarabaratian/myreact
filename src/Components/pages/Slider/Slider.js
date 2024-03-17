import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Carousel style={{ width: "100%" }} fade className="Carousel mb-5">
        <Carousel.Item>
          <img
            src={require("./media/banner_1.png")}
            className="img-fluid"
            alt=""
          />
          <Carousel.Caption>
            <h3>Luxurious Apartment</h3>
            <p>UPPER CHESTERFIELD</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("./media/banner_2.png")}
            className="img-fluid"
            alt=""
          />
          <Carousel.Caption>
            <h3>More livable spaces</h3>
            <p>AVEPOINT RICHMOND</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("./media/banner_4.png")}
            className="img-fluid"
            alt=""
          />
          <Carousel.Caption>
            <h3>Sorption Marking Studio</h3>
            <p>UPPER CHESTERFIELD</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
