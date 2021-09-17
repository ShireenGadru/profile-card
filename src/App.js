import CombineComponents from "./components/UI/CombineComponens";
import InputForm from "./components/UserInput/InputForm";
import Header from "./components/UI/Header"
import { useState } from 'react'
import Modal from "./components/Modal/Modal";

function App() {
  
  const userData = {
    name: 'Shireen Gadru',
    location: 'Hyderabad, India',
    about: 'Front End Web Developer and Graphic Designer',
    image: 'https://64.media.tumblr.com/c805cd4b87a5fe6e6dc9afff730f388c/tumblr_opyroxY26K1qciqqno1_400.gifv',
  } 

 const[userInfo, setUserInfo] = useState(userData);

 
const formSaveHandler = (userData) => {
  setUserInfo(userData)
}



  return (
    <div className="App">
      <Header />

      <InputForm onFormSave={formSaveHandler}/>
      <CombineComponents userData={userInfo}/>
    </div>
  );
}

export default App;
