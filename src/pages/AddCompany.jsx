import React from 'react'
import '../styles/AddCompany.css'

const AddCompany = () => {
    return (
        <div className='container1'>
            <form action="">
                <input type="text" placeholder='Enter Company Name' />
                <input type="text" placeholder='Enter Company Email' />
                <input type="text" placeholder='Enter Company Contact Number' />
                <input type="text" placeholder='Enter Company Work' />
                <input type="text" placeholder='Enter Company Logo Link' />
                <input type="text" placeholder='Enter Streams Allowed Separated By Comma(eg. CSE)' />
                <input type="text" placeholder='Enter Company JD Link' />
                <input type="text" placeholder='Enter Company Package' />
                <input type="date" name="visitingDate"></input>
                <button className='add'>Add Company</button>
            </form>
        </div>
    )
}

export default AddCompany