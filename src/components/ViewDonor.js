import React from 'react'
import Header from './Header'

const ViewDonor = () => {
    var viewdonor=[
        {
            "name":"Anjali",
            "address":"keazhadethu",
            "bloodgroup":"A+",
            "mobileno":"9846425864"
        },
        {
            "name":"Ashik",
            "address":"abc",
            "bloodgroup":"A+",
            "mobileno":"80896598542"
        }
    ]
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead className='table-danger'>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">BloodGroup</th>
      <th scope="col">MobileNo</th>
    </tr>
  </thead>
  <tbody>
    {viewdonor.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.address}</td>
      <td>{value.bloodgroup}</td>
      <td>{value.mobileno}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>


    </div>
  )
}

export default ViewDonor