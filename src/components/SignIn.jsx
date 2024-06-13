import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {
    const [datas,changedata]=useState(
        {
        
        "email":"",
        "password":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
        axios.post(" http://localhost:8080/signin",datas).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()

    } 
  return (
    <div>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="email" name="email" value={datas.email} onChange={inputHandler} id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="password" value={datas.password} onChange={inputHandler} id="" className="form-control" />
                </div>
            </div>
            <button className="btn btn-primary" onClick={readValue}>Login</button>
            &nbsp;&nbsp;
            <button className="btn btn-success">Sign up</button>
        </div>
    </div>
  )
}

export default SignIn