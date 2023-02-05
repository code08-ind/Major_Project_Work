import React from 'react'

const ViewCompany1 = () => {
    return (
        <div className='container'>
            <h1>Company Details</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <input type="text" readOnly value="Amazon" />
                    <div className="row">
                        <input type="text" readOnly value="campushiring@amazon.in" />
                        <input type="text" readOnly value="1800678896" />
                    </div>
                    <p>Streams Allowed: </p>
                    <div className="row">
                        <input type="text" readOnly value="CSE" />
                        <input type="text" readOnly value="IT" />
                        <input type="text" readOnly value="ECE" />
                        <input type="text" readOnly value="ICE" />
                    </div>
                    <div className="row">
                        <input type="text" readOnly value="SDE" />
                        <input type="text" readOnly value="44 LPA" />
                        <input type="text" readOnly value="12 October 2023" />
                    </div>
                    <p>LINK FOR JD</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="Amazon" />
                </div>
            </div>
        </div>
    )
}

export default ViewCompany1