import userimg from "../assets/user-photo.jpg";


const ImagePro = (props) => {
  const styleImg = { width: "90px", borderRadius: "50%", margin: "20px" };

  ImagePro.defaultProps = {
    src: [ userimg] ,
    alt: "userimg",
  };

  return (
    <>
      <img src={props.src} alt={props.alt} style={styleImg} />
      {props.children}
    </>
  );
};

export default ImagePro;


