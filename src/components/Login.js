import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    const subData=()=>{
        const data={"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">UserName</label>
                    <input onChange={(event)=>{setUsername(event.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(event)=>{setPassword(event.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button onClick={subData} className="btn btn-success">LOGIN</button> 
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/register">New user click here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Login