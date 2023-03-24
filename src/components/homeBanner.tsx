import React from 'react';
import { LoremIpsum, loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';

import Bannericon from "../Assets/scribble.svg";
import img1 from "../Assets/image 50.jpg";
import img2 from "../Assets/Mask Group.jpg";
import img3 from "../Assets/asd.jpg";

const HomeBanner = () => {
    return (
        <div className="flex flex-col md:flex-row mt-14">
            <div className="md:w-2/5 relative">
                <div className='my-24'>
                    <img src={Bannericon} alt="" />
                    <h2 className='font-bold text-4xl'>{name()}{surname()} {fullname()}{username()}</h2>
                </div>
                <div className='search flex justify-between items-center bg-slate-50 p-4'>
                    <span className='text-slate-400'>City</span>
                    <span className='text-slate-400'>location</span>
                    <button className='bg-orange-500 text-white p-2 rounded-sm'>Schedule visit</button>
                </div>
            </div>
            <div className="md:w-3/5 relative">
                <img className='BannerMainImg 2xl:mx-auto' src={img1} alt="" />
                <img className='BannerThreeImg' src={img3} alt="" />
                <img className='BannerSecoundImg' src={img2} alt="" />

            </div>

        </div>
    )
}

export default HomeBanner;
