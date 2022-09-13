import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Home(){
	const navigate = useNavigate();  
    var profileSlice = useSelector(state => state.profile);
    if(profileSlice.profile == null){  
      navigate('/login');   	  
    }

	
	return <> <h1>Welcome to the world of Geeks!</h1>
	
	
	</>
}

export default Home;
