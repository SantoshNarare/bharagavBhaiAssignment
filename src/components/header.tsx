import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between my-5 mx-16'>
            <ul className='flex headerMenu'>
                <li className='text-slate-500'>
                    HOME
                </li>
                <li className='text-slate-500'>
                    ABOUT
                </li>
                <li className='text-slate-500'>
                    SERVICE
                </li>
            </ul>

            <div className='flex justify-center'>
                <h4 className='bold text-2xl'>1-Space</h4>
            </div>
            <ul className='flex headerMenu'>
                <li className='text-slate-500'>
                    SERVICE
                </li>
                <li className='text-slate-500'>
                    SPACES
                </li>
                <li className='text-slate-500'>
                    EVENTS
                </li>
            </ul>
        </div>
    )
}

export default Header;
