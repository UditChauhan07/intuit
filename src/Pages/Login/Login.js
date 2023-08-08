import React from "react"
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const Dashboard = () => {
        navigate('/Dashboard')
    }

    return (
        <div className="LoginForm">
            
            <section class="vh-100"  >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-xl-10">
                            <div class="card" style={{borderRadius:'1rem'}} >
                                <div class="row g-0">
                                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" class="img-fluid"  />
                                    </div>
                                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div class="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div class="d-flex align-items-center mb-3 pb-1">
                                                   
                                                    <span class="h1 fw-bold mb-0">Intuite</span>
                                                </div>

                                                <h5 class="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                <div class="form-outline mb-4">
                                                <label class="form-label" for="form2Example17">Email address</label>
                                                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                                                    
                                                </div>

                                                <div class="form-outline mb-4">
                                                <label class="form-label" for="form2Example27">Password</label>
                                                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                                                   
                                                </div>

                                                <div class="pt-1 mb-4">
                                                    <button onClick={Dashboard} class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                                </div>

                                                <a class="small text-muted" href="#!">Forgot password?</a>
                                                <p class="mb-5 pb-lg-2" style={{color:'#393f81'}} > <a href="#!"
                                                   ></a></p>
                                                <a href="#!" class="small text-muted">Terms of use.</a>
                                                <a href="#!" class="small text-muted">Privacy policy</a>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login