import React, { useState, useEffect } from "react";

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

    console.log('country', country);
    return (

   <>
   
   <h1 className="text-center font-bold text-2xl text-gray-700"> Countries and Capetals</h1>
   <button onClick={()=>dispatch(logout())}> Logout </button>

   <div className="Container">
      
                     
                       {country && country.map((item, index) => {
                           return (
                            <div className="bg-gray-300 m-5 p-5 flex items-center justify-between" key={index}>
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