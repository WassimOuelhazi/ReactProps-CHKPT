import "./App.css";
import Profile from "../src/profile/Profile";


function App() {

  const styleApp = {display:"flex",flexDirection:"column"}

  return (
    <div style={styleApp}>
      <Profile
      fullName="Wassim Ouelhazi"
      bio="Studied Instrumentation and industrial maintenance engineering at INSAT"
      profession="Works as a measurement Engineer at Eni TTPC"
      />
    </div>

    
  );
}

export default App;
