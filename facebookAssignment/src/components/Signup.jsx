import { useState } from 'react'
import './Signup.css'


function Signup(props) {

    const {page, setPage} =props

    const [signupData, setSignupData] = useState(
        {
            firstName: "",
            surname: "",
            email: "",
            password: "",
            day: "",
            month: "",
            year: "",
            gender: ""

        }

    )

    const handlesignupData = (event)=> {
        const name = event.target.name
        const value = event.target.value

        setSignupData((prevState)=>(
            {
                ...prevState,
                [name] : value
            }
        ))
    }


    const submitListener = (event)=> {
        event.preventDefault()
    }


    const modalClose = ()=>{
        setPage((currentState)=> !currentState)

    }


    const auth = ()=>{
        if (signupData.firstName === ""){
            document.getElementById("firstName").style.borderColor = "red"
        }else {
            document.getElementById("firstName").style.borderColor = "gray"
        }

        if (signupData.surname === ""){
            document.getElementById("surname").style.borderColor = "red"
        }else {
            document.getElementById("surname").style.borderColor = "gray"
        }

        if (signupData.email === ""){
            document.getElementById("email").style.borderColor = "red"
        }else {
            document.getElementById("email").style.borderColor = "gray"
        }

        if (signupData.password === ""){
            document.getElementById("password").style.borderColor = "red"
        }else {
            document.getElementById("password").style.borderColor = "gray"
        }

        if (signupData.day === ""){
            document.getElementById("day").style.borderColor = "red"
        }else {
            document.getElementById("day").style.borderColor = "gray"
        }

        if (signupData.month === ""){
            document.getElementById("month").style.borderColor = "red"
        }else {
            document.getElementById("month").style.borderColor = "gray"
        }

        if (signupData.year === ""){
            document.getElementById("year").style.borderColor = "red"
        }else {
            document.getElementById("year").style.borderColor = "gray"
        }

        if (signupData.gender === ""){
            document.getElementById("gender").style.borderColor = "red"
        }else {
            document.getElementById("gender").style.borderColor = "gray"
        }
    }



    return(
      <>
         <section className='signupBackground'>
            <form onSubmit={submitListener}>

                <div className='signupWrap'>
                    <h1 id='signUp'>Sign Up</h1>
                    <button onClick={modalClose} id='modalButton'>X</button>
                </div>
                <h5 id='quick'>It's quick and easy.</h5>

                <hr id='signupHR' />
 
                <input className='inputFname' type="text"  name="firstName" id="firstName" placeholder="First Name" value={signupData.firstName} onChange={(event)=>{handlesignupData(event), auth()}}/>
                <input className='inputSur' type="text" name="surname" id="surname" placeholder="Surname" value={signupData.surname} onChange={(event)=>{handlesignupData(event), auth()}}/> <br />
                <input className='inputEpass' type="email" name="email" id="email" placeholder="Mobile number or email address"  value={signupData.email} onChange={(event)=>{handlesignupData(event), auth()}} /> <br />
                <input className='inputEpass' type="password" name="password" id="password" placeholder="New password" value={signupData.password} onChange={(event)=>{handlesignupData(event), auth()}}/> <br />
                
                <label className='labelInput'>Date of birth?</label> <br />
                <select className='selectInput' name="day" id="day" value={signupData.day} onChange={(event)=>{handlesignupData(event), auth()}} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">24</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>

                <select className='selectInput' name="month" id="month" value={signupData.month} onChange={(event)=>{handlesignupData(event), auth()}}>
                <option value="jan">Jan</option>
                    <option value="feb">Feb</option>
                    <option value="mar">Mar</option>
                    <option value="apr">Apr</option>
                    <option value="may">May</option>
                    <option value="jun">Jun</option>
                    <option value="jul">Jul</option>
                    <option value="aug">Aug</option>
                    <option value="sep">Sep</option>
                    <option value="oct">Oct</option>
                    <option value="nov">Nov</option>
                    <option value="dec">Dec</option>
                </select>

                <select className='selectInput' name="year" id="year" value={signupData.year} onChange={(event)=>{handlesignupData(event), auth()}}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                </select> <br />

                <label className='labelInput'>Gender?</label> <br />
                <div className='genderLabel-container'>
                    <div className='gender-wrap' name="gender" id="gender" value={signupData.gender}>
                        <label className='genderLabel'>Female <input type="radio" id='gender' name='gender'  onChange={(event)=>{handlesignupData(event), auth()}} /></label>
                    </div>
                    <div className='gender-wrap' name="gender" id="gender" value={signupData.gender}>
                        <label className='genderLabel'>Male <input type="radio" id='gender' name='gender' onChange={(event)=>{handlesignupData(event), auth()}} /></label>
                    </div>
                    <div className='gender-wrap' name="gender" id="gender" value={signupData.gender}>
                        <label className='genderLabel'>Custom <input type="radio" id='gender' name='gender' onChange={(event)=>{handlesignupData(event), auth()}} /></label>
                    </div>
                </div>

                <p id='text-one'>People who use our service may have uploaded your contact information to Facebook. <a id='learnMore' href="">Learn more.</a></p>

                <p id='text-two'>By clicking Sign Up, you agree to our <a id='terms' href="">Terms, Privacy Policy </a> and <a id='cookiesPolicy' href="">Cookies Policy. </a>You may receive SMS notifications from us and can opt out at any time.</p>

                <button id='signupBtn' type='submit' onClick={auth}>Sign Up</button>
    
            </form>
            
         </section>
        
      </>
    )
    
}


export default Signup