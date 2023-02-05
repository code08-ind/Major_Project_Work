import React from 'react'

const Hero = () => {
    return (
        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://www.nitj.ac.in//images/cce/nitj3.jpg')", height: 600, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
            </div>
        </header>
    )
}

export default Hero