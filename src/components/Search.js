import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    const [data,setData]=useState([
        {
            "name":"",
            "address":"",
            "mobileno":""
        }
    ])

var [bloodgroup,setBloodgroup]=useState("")
const searchData=()=>{
    const data={"bloodgroup":bloodgroup}
    console.log(data)
    axios.post("http://localhost:4005/api/search",data).then((response)=>{
        console.log(response.data)
        setData(response.data)
    })

}
const deleteData=(id)=>{
    const data={"_id":id}
    console.log(data)
    axios.post("http://localhost:4005/api/delete",data).then((response)=>{
        if(response.data.status=="success")
        {
            alert("successfully deleted")
        }
        else
        {
            alert("failed to delete")
        }
    })
}

  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">BloodGroup</label>
                    <input onChange={(a)=>{setBloodgroup(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchData} className="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>

{data.map((value,key)=>{
    return <div className="container">
        <div className='row'>
            <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
               <label className='form-label'>Name</label>
               <input type="text" className="form-control" value={value.name}/>
            </div>
            <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
               <label className='form-label'>Address</label>
               <input type="text" className="form-control" value={value.address}/>
            </div>
            <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
               <label className='form-label'>MobileNo</label>
               <input type="text" className="form-control" value={value.mobileno}/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={()=>{deleteData(value._id)}} className="btn btn-success">DELETE</button>
                </div>
        </div>

    </div>
})}


    </div>
  )
}

export default Search