import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewDonor = () => {
    var [viewdonor,setViewDonor]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:4005/api/view").then((response)=>{
      console.log(response.data)
      setViewDonor(response.data)
      setLoadstatus(false)
    })
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                  {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :
             <table class="table table-primary table-striped">
             <thead className='table-danger'>
               <tr>
                 <th scope="col">Name</th>
                 <th scope="col">Address</th>
                 <th scope="col">BloodGroup</th>
                 <th scope="col">MobileNo</th>
                 <th scope="col">UserName</th>
                 <th scope="col">Password</th>
               </tr>
             </thead>
             <tbody>
               {viewdonor.map((value,key)=>{
                 return <tr>
                 <td>{value.name}</td>
                 <td>{value.address}</td>
                 <td>{value.bloodgroup}</td>
                 <td>{value.mobileno}</td>
                 <td>{value.username}</td>
                 <td>{value.password}</td>
               </tr>
               })}
               
               
               
             </tbody>
           </table>
                 }
               


                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default ViewDonor