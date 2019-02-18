import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {BrowserRouter, Router, Link, Redirect } from 'react-router-dom';
import Menu from './menu';

class Login extends Component{
    handleSubmit=(e)=>{
     var uName=document.getElementById("name").value;
     var Password=document.getElementById("pswd").value;
     if(uName=="admin" && Password=="admin"){
         alert("Login Success");
         this.props.history.push('/menu');

     }
    else{
        alert("login fail");
    }
    }
    render(){
        return(
              <form onSubmit={this.handleSubmit} id="login">
              <tr>
                  <td>
              <label>UserName:</label></td>
             <td> <input type="text"  placeholder="Enter User Name" id="name"/><br /></td>
            
             </tr>
             <tr>
             <td> <label>Password:</label></td>
             <td> <input type="password"  placeholder="Enter Password" id="pswd"/><br /></td>
              </tr>
              <tr>
              <td></td><td><button type="submit" value="Login">Login</button>
              <button type="button" value="Cancel">Cancel</button></td>
             </tr>
              </form>
        )
    }
}
export default Login;