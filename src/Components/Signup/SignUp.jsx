import React from 'react'
import { useState, useContext } from 'react'
import { FirebaseContext } from '../store/FirebaseContext';
import './Signup.css'
import { useHistory } from 'react-router-dom'


function SignUp() {

    const history = useHistory()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { firebase } = useContext(FirebaseContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: username }).then(() => {
                firebase.firestore().collection('users').add({
                    id: result.user.uid,
                    username: username,
                    phone: phone
                }).then(() => {
                    history.push("/login")

                })

            })
        })
    }

    return (
        <div class="wrapper">
            <div class="container">
                <div class="col-left">
                    <div class="login-text">
                        <h2>PETS-WING</h2>
                        <p>Need to find the perfect pet for you and your family? Login to explore..!!
                        </p>
                        <a class="btn" href="">Read More</a>
                    </div>
                </div>
                <div class="col-right">
                    <div class="login-form">
                        <h2>Sign-Up</h2>
                        <form onSubmit={handleSubmit} >
                            <input
                                className="input"
                                type="text"
                                placeholder='Enter your Name'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                name="name"
                            />
                            <br />
                            <input
                                className="input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your Email'
                            />
                            <br />
                            <input
                                className="input"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter your Contact number'
                                name="phone"
                            />
                            <br />
                            <input
                                className="input"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your Password'
                            />
                            <br />
                            <button className='login-btnz'>SignUp</button>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp