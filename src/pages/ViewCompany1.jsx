import React from 'react'

const ViewCompany1 = () => {
    return (
        <div className='container'>
            <h1>Company Details</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <input type="text" readOnly value="Microsoft" />
                    <div className="row">
                        <input type="text" readOnly value="campushiring@microsoft.in" />
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
                        <input type="text" readOnly value="51 LPA" />
                        <input type="text" readOnly value="12 August 2023" />
                    </div>
                    <p>LINK FOR JD</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="Microsoft" />
                </div>
            </div>
        </div>
    )
}

export default ViewCompany1