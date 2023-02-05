import React from 'react'
import '../styles/Dashboard.css';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Company from '../data/Company';

const Comanies = () => {
    return (
        <div className="main">
        <Grow in>
            <Grid className="container1 my-4" container alignItems="stretch" spacing={3}>
                {Company.map((content) => (
                    <Grid item xs={12} sm={6} lg={3} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={content.img} alt="Logo" />
                        <br />
                    </Grid>
                ))}
            </Grid>
        </Grow>
        </div>
    )
}

export default Comanies