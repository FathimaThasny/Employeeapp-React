import axios from 'axios'
import React, { useState } from 'react'
import { Header } from './Header'

export const Dashboard = () => {

    const apilink="https://jsonplaceholder.typicode.com/users"
    var [users, setusers] = useState(
        []
    )

    React.useEffect(
        () => {
            axios.get(apilink)
            .then(
                (response) => {
                    setusers(response.data)
                }
            )
        },[]
    )

  return (
    <div>
        <Header/>
        
        <div className='row g-4'style={{margin: "10px"}}>
        

        {users.map(
            (value)  =>{
                return <div className="col col-12 col-sm-6 col-lg-4 col-md-4 col-xl-3 col-xxl-3" >
                <table className='table table-bordered border-primary' style={{width: "20rem"}}>
            <tbody>
                <tr>
                    <th className='table-danger table-bordered border-primary' scope='col'>UserId</th>
                    <td className='table-warning table-bordered border-primary'>{value.id}</td>
                </tr>
                <tr>
                    <th className='table-danger table-bordered border-primary' scope='col'>Name</th>
                    <td className='table-warning table-bordered border-primary'>{value.name}</td>
                </tr>
                <tr>
                    <th className='table-danger table-bordered border-primary' scope='col'>E-mail</th>
                    <td className='table-warning table-bordered border-primary'>{value.email}</td>
                </tr>
            </tbody>

        </table>
        </div>
 }
 )}
        </div>
    </div>
  )
}
