import React from 'react'

const ViewCompany1 = () => {
    return (
        <div className='container'>
            <h1>Company Details</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                        <input type="text" readOnly value="Google" />
                    <div className="row">
                        <input type="text" readOnly value="campushiring@google.in" />
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
                        <input type="text" readOnly value="SWE" />
                        <input type="text" readOnly value="64 LPA" />
                        <input type="text" readOnly value="12 September 2023" />
                    </div>
                    <p>LINK FOR JD</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="Google" width={350} height={200} />
                </div>
            </div>
        </div>
    )
}

export default ViewCompany1