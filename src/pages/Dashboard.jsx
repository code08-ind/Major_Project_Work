import React from 'react';
import '../styles/Dashboard.css';
import { NavLink } from 'react-router-dom';
import Content from '../data/Content.js';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Dashboard = () => {
    return (
        <Grow in>
            <Grid className="container1 mt-4" container alignItems="stretch" spacing={3}>
                <Stack sx={{ width: '92%' }} spacing={1}>
                    <Alert className='stack' icon={<CalendarMonthIcon fontSize="inherit" />} severity="info">
                        <AlertTitle>February 2023</AlertTitle>
                        Visiting Companies In This Month - <strong>Check It Out!</strong>
                    </Alert>
                </Stack>
                {Content.map((content) => (
                    <Grid item xs={12} sm={6} lg={4} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Card sx={{ maxWidth: 345 }} className='my-4'>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }} aria-label="recipe">
                                        <img src={content.logo} width={40} height={40} alt={content.name}/>
                                    </Avatar>
                                }
                                title={content.type}
                                subheader={content.year}
                            />
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
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <Button variant="contained" color="primary" className='btn' style={{ marginLeft: '90px', color:'white' }}>
                                    <NavLink to={content.link} style={{color:'white'}}>
                                        See Details
                                    </NavLink>
                                </Button>
                            </CardActions>
                        </Card>
                        <br />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default Dashboard