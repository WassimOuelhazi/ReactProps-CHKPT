//The profile component gets data (fullName, bio, profession) as props ... DONE
// The profile component gets image as children props ... DONE
//The profile component gets the function handleName functions as a prop that sends an alert message with the name of the profile user... DONE
// Define the default props for Profile component... DONE
// Use PropsType to check props...DONE
// Use inline style... DONE

import ImagePro from "../profile/ImagePro";
import Img from "../assets/pro-photo.jpg";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
// import userimg from "../assets/user-photo.jpg";

function handleName(name) {
  return (
    <>
      <Alert variant="dark">You are logged in as : {name}</Alert>
    </>
  );
}

const profile = (props) => {
  const styleTexts = {
    border: "1.5px solid lightgrey",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
  };
  const overAllStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: "lightgrey",
    border: "1.5px solid lightgrey",
    borderRadius: "20px",
    width: "100%",
  };

  const styleName = {
    fontSize: "25px",
    margin: "10px 0px",
  };

  const styleBio = {
    fontSize: "15px",
    margin: "0",
  };

  const stylePro = {
    fontSize: "15px",
    margin: "0",
  };

 
  const bodyeStyle = {
    height : "100vh",
    overflow:"auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  profile.defaultProps = {
    fullName: "user",
    bio: "No bio",
    profession: " No profession",
   
  };

  return (
    <div style = {bodyeStyle}>     

      <div style={overAllStyle}>
        <div>
          <ImagePro src = {Img} alt='profilePhoto'></ImagePro>
        </div>

        <div style={styleTexts}>
          <p style={styleName}>{props.fullName}</p>
          <p style={styleBio}>{props.bio}</p>
          <p style={stylePro}>{props.profession}</p>
        </div>
      </div>

      <div>{handleName(props.fullName)}</div>
    </div>
  );
};

profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default profile;
