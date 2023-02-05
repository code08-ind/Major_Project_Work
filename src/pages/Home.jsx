import React, { useState} from 'react';
import Carousal from '../components/Carousal';
import News from '../components/News';
import Companies from '../components/Companies';
import FAQ from '../components/FAQ';
import Loader from '../components/Loader';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        setIsLoading(true);
    }, 5000);

    setTimeout(() => {
        setIsLoading(false);
    }, 5000);

    return (
        <>
            {isLoading ? <Loader /> : (
                <>
                    <Carousal />
                    <News />
                    <Companies />
                    <FAQ />
                </>
            )}
        </>
    );
}

export default Home;