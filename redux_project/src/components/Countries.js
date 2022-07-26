import React, { useState, useEffect } from "react";
import {Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import {useDispatch} from 'react-redux'
import {logout} from '../actions/index'






function Country() {
    const dispatch=useDispatch();
    const [country, setcountry] = useState([]);

    useEffect(() => {
        const loadcountry = async () => {
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/capital");

            setcountry(response.data.data);
        };

        loadcountry();
    }, []);


      const hideCountry = (id) => (
        document.getElementById(id).style.display="none"
      )
  

    console.log('country', country);
    return (

   <>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav >
            <Nav.Link href="#home"><button onClick={()=>dispatch(logout())} > Logout </button></Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
   
   <h1 className="text-center font-bold text-2xl text-gray-700"> Countries and Capetals</h1>
 

   <div className="align-item center" style={{width:'70%', marginLeft:'15%'}}>
      
                     
                       {country && country.map((item, index) => {
                           return (
                            <div className="bg-gray-300 m-5 p-5 flex items-center justify-between" key={index} style={{display:hideCountry}} id={item.name} >
                            <div>
                              <h3 className="font-bold text-lg text-gray-700">{item.name}</h3>
                              <span className="font-normal text-gray-600">{item.capital}</span>
                            </div>
                       
                            <div className="flex gap-4">
                              {/* <Link to={`edit-user/${user.id}`}> */}
                                {/* <button>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                                </button> */}
                              {/* </Link> */}
                              <button
                                // onClick={() => handleRemoveUser(user.id)}
                                onClick={() => hideCountry(item.name)} 
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          
                           )
                       })}
                   
                   </div>
            
          
   </>
    )


}

export default Country;