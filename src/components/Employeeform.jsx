import React, { useState} from 'react'
import { Header } from './Header'

export const Employeeform = () => {

    const [input,setInput] = useState({})

    const changeMyData = (event) => {
        setInput({
            ...input,[event.target.name]:event.target.value
        })
    }

    const clickAdd = ()=>{
        console.log(input)
    }

  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row g-3" style={{margin: "40px 10px 0 10px"}}>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>NAME</label>
                            <input name='name' type="text" className="form-control" onChange={changeMyData} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="" className='form-label'>DESIGNATION</label>
                            <input name='designation' type="text" className="form-control" onChange={changeMyData} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='form-label'>LOCATION</label>
                            <input name='location' type="text" className="form-control" onChange={changeMyData} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className='form-label'>SALARY</label>
                            <input name='salary' type="text" className="form-control" onChange={changeMyData} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={clickAdd} className="btn btn-danger"> ADD DATA </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
