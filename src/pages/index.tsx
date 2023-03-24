import React from 'react';
import Benifits from '../components/benefits';
import HomeBanner from '../components/homeBanner';
import Service from '../components/service';
import Solution from '../components/solution';
import WithHeader from '../layout/withHeaderAndFooter';

const HomePage = () => {
    return (
        <WithHeader>
            <HomeBanner />
            <Service isImageWillBeFirst={true} />
            <Service isImageWillBeFirst={false} />
            <Solution />
            <Benifits />
        </WithHeader>
    )
}

export default HomePage;
