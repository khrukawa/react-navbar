import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header />


            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 25,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'red'
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </>
    )
}
export default Home