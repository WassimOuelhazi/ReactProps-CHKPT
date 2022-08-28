

const ImagePro = (props) => {
  const styleImg = { width: "90px", borderRadius: "50%", margin: "20px" };

  return (
    <>
      <img src={props.src} alt={props.alt} style={styleImg} />
      {props.children}
    </>
  );
};

export default ImagePro;

