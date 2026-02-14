import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/login");
    }
    console.log("User is not loggedIn");
  },[isLoggedIn, navigate])
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to DevConnect</p>
    </div>
  )
}

export default Home
