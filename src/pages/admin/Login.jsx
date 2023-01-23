import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const data = {
    email:"admin@admin.ru",
    password:"admin123"
}

const Login = props => {

    const [email,setEmail] = useState()
    const [pass,setPass] = useState()

    const [type,setType] = useState("password")
    const [icon,setIcon] = useState (<i class="fa-regular fa-eye"></i>)

  
  const formSubmit =(e)=>{
    e.preventDefault()

    if(!email || !pass){
        toast.info('Please fill input!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }      else {
        if(email === data.email && pass === data.password) {
               props.history.push("/admin")
        } else {
            toast.error('Email or Password is wrong!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
  }

  const iconChange =()=>{
    if(type === "password"){
        setType("text")
        setIcon(<i class="fa-solid fa-eye-slash"></i>)
    } else {
        setType("password")
        setIcon(<i class="fa-regular fa-eye"></i>)
    }
  }
  
    return (
   <>
   
<div className="boxLogin">
    <div className="boxImgLogin">
    <img src="https://purepng.com/public/uploads/large/purepng.com-ubisoft-logologosubisoftgame-companydevelopment-821523994637dtm04.png" alt="" width="100px" />
    <span>Login</span>

    <div className="boxInput">
        <form onSubmit={formSubmit}>
            
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="" id=""  placeholder='Enter Email...' />
            <i class="fa-regular fa-envelope"></i> 
            <br /> <br />
            <input onChange={(e)=>{setPass(e.target.value)}} type={type} name="" id=""  placeholder='Enter Password...' />
            <i onClick={iconChange}>{icon}</i>
            <button className="btn btn-outline-success sigin">Sign in</button>
     
        </form>
    </div>
    </div>
    
</div>
<ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   </>
  )
}

export default Login