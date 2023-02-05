import React from 'react'
import '../styles/Contacts.css'

const Footer = () => {
    return (
        <footer className="contacts">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 main1">
                        <img src="https://www.nitj.ac.in/physics/caneupa2020/images/logo_250.png" alt="NIT Jalandhar" className='mr-1' />
                        <p className='mt-4'>Dr. B. R. Ambedkar National Institute Of Technology, Jalandhar, Punjab</p>
                    </div>
                    <div className="col-md-7 col-sm-12 main2">
                        <p>Other NIT's</p>
                        <span className='mx-3 mb-3'>|</span>
                        <p>Credits</p>
                        <span className='mx-3 mb-3'>|</span>
                        <p>TEQIP</p>
                        <span className='mx-3 mb-3'>|</span>
                        <p>Main Site</p>
                    </div>
                </div>
            </div>
            <p className='mt-2'>&copy;All Rights Reserved NIT Jalandhar</p>
        </footer>
    )
}

export default Footer