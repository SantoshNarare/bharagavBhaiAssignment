import React, { ReactNode } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

type Props = {
    children: ReactNode
}

const WithHeaderAndFooter = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className='mx-10'>
                {children}
            </div>
            <div className='bg-gradient-to-t from-orange-100 to-white'>
                <Footer />
            </div>
        </div>
    )
}

export default WithHeaderAndFooter;
