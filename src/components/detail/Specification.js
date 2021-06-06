import "./Detail.scss";

const Specification = (props) => {
  const { product, color, size } = props;

  const showChosenColor = (targetedEl) => {
    console.log("clicked");
    props.setChosenColor(targetedEl);
  };

  const showChosenSize = (targetedEl) => {
    props.setChosenSize(targetedEl);
  };

  return (
    <>
      {product[0].category === "electronics" ? (
        <>
          <p className="color-title">
            Colour: <span>{color}</span>
          </p>
          <div className="color-wrap">
            <input
              className="color-btn e-silver"
              type="submit"
              value="Silver"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn black"
              type="submit"
              value="Black"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn white"
              type="submit"
              value="White"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn maroon"
              type="submit"
              value="Maroon"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn teal-blue"
              type="submit"
              value="Teal Blue"
              onClick={(e) => showChosenColor(e.target)}
            />
          </div>
        </>
      ) : product[0].category === "accessories" ? (
        <>
          <p className="size-title">
            Size: <span>{size}</span>
          </p>
          <div className="size-wrap">
            <input
              className="size-btn"
              type="submit"
              value="S"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="M"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="L"
              onClick={(e) => showChosenSize(e.target)}
            />
          </div>
          <p className="color-title">
            Colour: <span>{color}</span>
          </p>
          <div className="color-wrap">
            <input
              className="color-btn rose-gold"
              type="submit"
              value="Rose Gold"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn gold"
              type="submit"
              value="Gold"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn silver"
              type="submit"
              value="Silver"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn black"
              type="submit"
              value="Black"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn charcoal"
              type="submit"
              value="Charcoal"
              onClick={(e) => showChosenColor(e.target)}
            />
          </div>
        </>
      ) : (
        <>
          {/* If category is "clothes" */}
          <p className="size-title">
            Size: <span>{size}</span>
          </p>
          <div className="size-wrap">
            <input
              className="size-btn"
              type="submit"
              value="XXS"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="XS"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="S"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="M"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="L"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="XL"
              onClick={(e) => showChosenSize(e.target)}
            />
            <input
              className="size-btn"
              type="submit"
              value="XXL"
              onClick={(e) => showChosenSize(e.target)}
            />
          </div>
          <p className="color-title">
            Colour: <span>{color}</span>
          </p>
          <div className="color-wrap">
            <input
              className="color-btn beige"
              type="submit"
              value="Beige"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn navy"
              type="submit"
              value="Navy"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn gray"
              type="submit"
              value="Gray"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn black"
              type="submit"
              value="Black"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn brown"
              type="submit"
              value="Brown"
              onClick={(e) => showChosenColor(e.target)}
            />
            <input
              className="color-btn off-white"
              type="submit"
              value="Off-white"
              onClick={(e) => showChosenColor(e.target)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Specification;
