import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div className='container'>
            <div className="contact">
                <h1>Postal Address</h1>
                <p>Dr B R Ambedkar National Institute of Technology Jalandhar
                    N.I.T. Post Office, Jalandhar (Punjab) - 144027
                    India</p>
            </div>
            <div className="row">
                <div className='container1 col-md-6 col-sm-12'>
                    <form action="">
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="text" placeholder='Enter Your Email' />
                        <input type="text" placeholder='Enter Your Contact Number' />
                        <textarea name="msg" id="msg" cols="40" rows={5} placeholder='Enter Your Message' />
                        <button className='add'>Send Message</button>
                    </form>
                </div>
                <div className="container2 col-md-6 col-sm-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.662272085347!2d75.5358439!3d31.395874600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e0!3m2!1sen!2sin!4v1675325294487!5m2!1sen!2sin" width="550" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='NIT Jalandhar'></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact