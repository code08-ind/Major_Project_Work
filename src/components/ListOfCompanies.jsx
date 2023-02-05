import React from 'react'
import '../styles/list.css';

const ListOfCompanies = () => {
    return (
        <div className='container mt-4' style={{marginTop:'100px'}}>
            <h3 className='text-center mt-4' style={{marginTop:'100px'}}>
                List Of Few Prominent Visiting Companies
            </h3>
            <div className="comps my-4 mt-3">
                <div className="row">
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Microsoft</li>
                            <li>Amazon</li>
                            <li>Increff</li>
                            <li>Oracle</li>
                            <li>Samsung</li>
                            <li>C-DOT</li>
                            <li>Intuit</li>
                            <li>Trilogy</li>
                            <li>Vardman</li>
                            <li>Honda</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Flipkart</li>
                            <li>Google</li>
                            <li>Byju's</li>
                            <li>AmEx</li>
                            <li>Tesco</li>
                            <li>Hexaware</li>
                            <li>Oracle</li>
                            <li>OLX</li>
                            <li>Incedo</li>
                            <li>MAQ</li>
                        </ul></div>
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Synopsys</li>
                            <li>Infineon</li>
                            <li>Cvent</li>
                            <li>Signify</li>
                            <li>Philips</li>
                            <li>Nineleaps</li>
                            <li>Daimler</li>
                            <li>Delhivery</li>
                            <li>EY</li>
                            <li>L&T</li>
                        </ul></div>
                    <div className="col-md-3 col-sm-12 ll">
                        <ul>
                            <li>Havells</li>
                            <li>Paytm</li>
                            <li>Natwest</li>
                            <li>Hero</li>
                            <li>Maruti</li>
                            <li>Accenture</li>
                            <li>Reliance</li>
                            <li>Jio</li>
                            <li>Cadence</li>
                            <li>Deloitte</li>
                        </ul></div>
                </div>
            </div>
        </div>
    )
}

export default ListOfCompanies