import "./Images.css";

function Images(props) {
  return (
    <div className="images">
      {props.image.map(function (image, index) {
        return <img key={index} src={image.src.tiny} alt={image.alt} />;
      })}
    </div>
  );
}

export default Images;
