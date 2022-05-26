import React, { useState } from 'react'

const Register = () => {
    var [name,setName]=useState("")
    var [address,setAddress]=useState("")
    var [bloodgroup,setBloodgroup]=useState("")
    var [mobileno,setMobileno]=useState("")
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    const addReg=()=>{
        const data={"name":name,"address":address,"bloodgroup":bloodgroup,"mobileno":mobileno,"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Address</label>
                    <input onChange={(e)=>{setAddress(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Blood Group</label>
                    <input onChange={(e)=>{setBloodgroup(e.target.value)}} type="text" className="form-control"/>
                    </div>
                 <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">MobileNo</label>
                    <input onChange={(e)=>{setMobileno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">UserName</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addReg} className="btn btn-success">REGISTER</button>
                    <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/login">Back to login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Register