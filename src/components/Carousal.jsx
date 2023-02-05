import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousal = () => {
    return (
        <Carousel>
            <Carousel.Item>
                {/* <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Our vertos glimmer in the world of placement just like <span>fireflies twinkle in the emrald glass</span></h5>
                </Carousel.Caption> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, maxime suscipit. Omnis hic, amet dolorum iste, velit quam, perferendis culpa iure cum nam neque.</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, maxime suscipit. Omnis hic, amet dolorum iste, velit quam, perferendis culpa iure cum nam neque.</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h5>See How<span> NITJ's students prepare</span> and <span>bag good packages</span> with top companies!</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>NITJ's students are placed with top companies like<span> Microsoft, Google And Amazon</span></h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}



export default Carousal