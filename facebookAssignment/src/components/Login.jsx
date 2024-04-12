import { useState } from 'react'
import React from 'react'
import './Login.css'


function Login (props) {

    const {setPage, page} = props


    const togglePage = ()=> {
        setPage((prevState) => !prevState)
    }

    const submitListener =(event) =>{
        event.preventDefault()
    }

    return(
        <>
            

          <section className={page ? "backGroundBlur" : ``} >

             <div className="mainBackground">
                <div className="facebookWrap">
                    <img id="facebookImage"  src="./src/assets/facebook.svg" alt="facebook" />
                    <h2 id="facebookText">Facebook helps you connect and share <br /> with the people in your life.</h2>
                </div>

                <div className="loginContainer">
                    
                        <form id='formWrap' onSubmit={submitListener}>
                            <input className='loginInput' type="text" name="" placeholder="Email address or phone number" />
                            <input className='loginInput' type="password" name="password" placeholder="Password" />
                            <button id="loginBtn">Log in</button>
                            <h5 id="forgotPassword"><a id='forgotPassword-link' href="">Forgotten password?</a></h5> <br />

                            <hr id='loginHR' /> <br />

                            <button id="createAccountbtn" type='submit' onClick={togglePage}>Create new account</button>
                        </form>
                   

                    <h3 id="createPage"><a id='createPage-link' href="">Create a Page</a> for a celebrity, brand or business.</h3>
                     
                </div>
        
             </div>
          </section>
            
        </>
    )
    
}

export default Login