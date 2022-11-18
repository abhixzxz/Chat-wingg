import React from 'react'
import './Login.css'
function Login() {
    return (
        <div class="wrapper">
            <div class="container">
                <div class="col-left">
                    <div class="login-text">
                        <h2>Logo</h2>
                        <p>Need to find the perfect pet for you and your family? Login to explore..!!
                        </p>
                        <a class="btn" href="">Read More</a>
                    </div>
                </div>
                <div class="col-right">
                    <div class="login-form">
                        <h2>Login</h2>
                        <form>
                            <p>
                                <input type="text" placeholder="Username" required />
                            </p>
                            <p>
                                <input type="password" placeholder="Password" required />
                            </p>
                            <p>
                                <button className='login-btn'>SignIn</button>
                            </p>
                            <p>
                                <a>Forget password?</a>
                                <a>Create an account.</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login