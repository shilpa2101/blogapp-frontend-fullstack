import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [datas,changedata]=useState(
        {
        "name":"",
        "email":"",
        "password":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
        axios.post("http://localhost:8080/signup",datas).then(
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
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={datas.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="email" name="email" value={datas.email} onChange={inputHandler} id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="password" value={datas.password} onChange={inputHandler} id="" className="form-control" />
                </div>
            </div>
        </div>
        <button className="btn btn-primary" onClick={readValue}>Sign up</button>
    </div>
  )
}

export default SignUp