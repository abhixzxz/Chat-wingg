import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Create.css'

function Create() {
    return (
        <div className='cr-div'>
            <Navbar />

            <img className='dog-bg' src="/assets/dog.jpg" alt="" />

            <card>
                <div className="centerDiv">
                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        placeholder='Name'
                        id="fname"
                        name="Name"
                    />
                    <br />
                    <br />
                    <input
                        className="inputzz"
                        type="text"
                        id="fname"
                        name="category"
                        placeholder='Category or breed'
                    />
                    <br />
                    <br />
                    <input className="inputzz"
                        type="number"
                        id="fname"
                        placeholder='Price'
                        name="Price" />
                    <br />
                    <br />
                    <img alt="Posts" width="200px" height="200px" src=""></img>
                    <br />
                    <input />
                    <br />
                    <button className="uploadBtn">Upload</button>
                </div>
            </card>
        </div>
    )
}

export default Create