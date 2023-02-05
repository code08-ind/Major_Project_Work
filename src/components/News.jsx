import React from 'react';
import '../styles/Dashboard.css';
import Content from '../data/Content.js';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const News = () => {
    return (
        <>
            <div className='container mt-3' style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <h1>LATEST NEWS</h1>
                <p>Know more about our impeccable placement record</p>
            </div>
            <Grow in>
                <Grid className="container1 my-4" container alignItems="stretch" spacing={3}>
                    {Content.map((content) => (
                        <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Card sx={{ maxWidth: 345 }} className='my-4'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    className='imag'
                                    image={content.imgLink}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="h4" color="text.secondary">
                                        {content.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {content.desc}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" color="primary" className='btn' style={{ marginLeft: '105px' }}>
                                        Read More
                                    </Button>
                                </CardActions>
                            </Card>
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
            <br />
            <br />
        </>
    )
}

export default News