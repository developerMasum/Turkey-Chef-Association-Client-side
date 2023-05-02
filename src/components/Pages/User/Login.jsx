import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const{signIn,googlePopUp} = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

//  pop up 
const handlePopUp =()=>{
  googlePopUp(provider)
  .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser);
  })
  .catch(error=>{
    console.log(error.message);
  })
}

 

const handleLogin =(event)=>{
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password);


  signIn(email,password)
  .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser);
})
.catch(error=>{
    console.log(error.message);
})


// popup 




}


  return (
    <div>
      <h2> Please Login </h2>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name='email' id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' className="form-control" id="password" placeholder="Password" />
                </div>
                <Button variant="primary" type="submit" className="btn-block mb-3 mt-3">
                  Login
                </Button>
                <p><small>New here? Click here <Link to={'/register'} > to register</Link> </small></p>
                <hr />
                <Button onClick={handlePopUp} variant="light" className="btn-block mb-3">
                  <FaGoogle className="mr-2" />
                  Continue with Google
                </Button>
                <Button variant="dark" className="btn-block d-flex">
                  <FaGithub className="mr-2" />
                  Continue with Github
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Login;