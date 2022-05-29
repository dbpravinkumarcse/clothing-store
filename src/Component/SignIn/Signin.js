import React from 'react'
import FormInput from '../FormInput';
import "./Signin.style.scss";
import './CustomButton.style.scss';
import {signInWithGoogle} from '../Shop/firebase';
import Springclass from '../Springclass';

const Signin = ({user}) => {

  
    const [OnChange,setOnchange]=React.useState({email : "",password : ""});

    const [signupOnChange,setsignupOnchange] = React.useState({username : "",email : "",password : "",confirmpass : ""});

    const ChangeHandle =(event)=>{
        const value = event.target.value;
        setOnchange({...OnChange,[event.target.name]:value});
    }

    const SubmitHandle = async (event)=>{
        event.preventDefault();
        if(OnChange.email === "" && OnChange.password === ""){
         {
            alert("Please enter email and password");
         }
        }
        else{
          Springclass.signinuser(OnChange).then((res)=>{console.log(res)});
        }
        setOnchange({email : "",password : ""});
    }
  
    const signupChangeHandle= (event)=>{
      const value = event.target.value;
      setsignupOnchange({...signupOnChange,[event.target.name]:value});
    
  }

  const signupSubmitHandle =(e)=>{
      e.preventDefault();
    
     if(signupOnChange.username === "" && signupOnChange.email === ""&&signupOnChange.password === ""&&signupOnChange.confirmpass === ""){
      {
         alert("Please enter all the feilds");
      }
     }
     else{
      Springclass.signupuser(signupOnChange).then(res=>{console.log(res.data)}).catch(err =>{console.log(err)});
     }
     setsignupOnchange({username : "",email : "",password : "",confirmpass : ""});
  }


  return (
    <div className='login'>
        <div className="sign-in">
          <h1 className='title'>Already a Customer?</h1>
          <h2 className='title'>Please Signin to Continue</h2>
        <form onSubmit={SubmitHandle} >  
        <FormInput  type="text" name="email" value={OnChange.email} ChangeHandle={ChangeHandle} label="email"/>   
        <FormInput  type="password" name="password" value={OnChange.password} ChangeHandle={ChangeHandle} label="password"/>
        <button className="custom-button" type="submit">Sign in</button>  
        </form>
        <button className="custom-button"  onClick={signInWithGoogle}>Sign In with Google</button> 
        </div>

      <div className="sign-up">
      <h1 className='title'>Are you a New Customer ?</h1>
      <h2 className='title'>Please SignUp to Continue</h2>
    <form onSubmit={signupSubmitHandle} >  
    <FormInput  type="text" name="username" value={signupOnChange.username} ChangeHandle={signupChangeHandle} label="username"/>   
    <FormInput  type="text" name="email" value={signupOnChange.email} ChangeHandle={signupChangeHandle} label="email"/>   
    <FormInput  type="text" name="password" value={signupOnChange.password} ChangeHandle={signupChangeHandle} label="password"/>
    <FormInput  type="password" name="confirmpass" value={signupOnChange.confirmpass} ChangeHandle={signupChangeHandle} label="confirm-password"/>   
    <button className="custom-button" type="submit">Sign Up</button> 
    </form>
    </div>

    </div>
  )
}

export default Signin