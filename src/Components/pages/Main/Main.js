const Main = () => {
  return (
    <>
      <h3 className="text-home text-dark ">
        Luxurious lifestyle in the Mansion
      </h3>
      <div className="col-6 offset-3">
        <p className="p-home">
          No matter the task, Freya Inc. is up for it. Cum sociis natoque
          penatibus et magnis dis parturient bee, nascetur ridiculus mus. Nulla
          vitae elit libero, pharetra. Integer posuere erat ante venenatis
          posuere velit aliquet. Etiam wagner moura porta malesuada magna mollis
          euismod mondar alu aflak.
        </p>
      </div>
      <div className="col-8 offset-2">
        <img
          src={require("./media/img_7.jpg")}
          alt=""
          className="img-fluid"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="col-8 offset-2 d-flex flex-xl-nowrap flex-md-nowrap flex-wrap mb-5 gap-1">
        <img
          src={require("./media/img_8.jpg")}
          alt=""
          style={{
            height: "750px",
            marginRight: "",
            marginTop: "2%",
            cursor: "pointer",
          }}
          className="col-xl-6 col-md-6 col-12"
        />
        <img
          src={require("./media/img_9.jpg")}
          alt=""
          style={{
            height: "750px",
            marginTop: "2%",
            cursor: "pointer",
          }}
          className="col-xl-6 col-md-6 col-12"
        />
      </div>
    </>
  );
};

export default Main;
