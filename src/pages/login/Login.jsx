import Footer from "../../common/components/footer/Footer";
import Navbar from "../../common/components/navbar/Navbar";
import LoginForm from "./components/LoginForm";


const Login = () => {

  return (
    <div>
      <Navbar />  
      <br />
        <br />
        <LoginForm />  
      <br />
      <Footer />
    </div>
  );
};

export default Login;
