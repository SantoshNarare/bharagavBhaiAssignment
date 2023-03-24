import React, { useState } from 'react';
import WithHeader from '../layout/withHeaderAndFooter';
import { loremIpsum } from "react-lorem-ipsum";
import Bannericon from "../Assets/scribble.svg";
import img1 from "../Assets/image 50.jpg";

const DetailsPage = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <WithHeader>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 my-32'>
                <div className='justify-self-start'>
                    <img src={Bannericon} alt="Bannericon" />
                    <h3 className='text-4xl my-1'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</h3>
                    <h5 className='text-orange-600 mb-4'>{loremIpsum({ p: 1, avgWordsPerSentence: 4, avgSentencesPerParagraph: 1 })}</h5>
                    <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                    <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                    <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                </div>
                <img className='BannerMainImg' src={img1} alt="detailImg" />
            </div>
            <div className='flex flex-col sm:flex-row'>
                <button onClick={() => setActiveTab(0)} className={`${activeTab === 0 ? "bg-orange-500 text-white" : "border-2 border-orange-400"} py-2 px-10 rounded-3xl mx-10 my-2`}>Details 1</button>
                <button onClick={() => setActiveTab(1)} className={`${activeTab === 1 ? "bg-orange-500 text-white" : "border-2 border-orange-400"} py-2 px-10 rounded-3xl mx-10 my-2`}>Details 2</button>
                <button onClick={() => setActiveTab(2)} className={`${activeTab === 2 ? "bg-orange-500 text-white" : "border-2 border-orange-400"} py-2 px-10 rounded-3xl mx-10 my-2`}>Details 3</button>
            </div>
            {activeTab === 0 && <div className='my-4'>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
            </div>}
            {activeTab === 1 && <div className='my-4'>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
            </div>}
            {activeTab === 2 && <div className='my-4'>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
            </div>}
        </WithHeader>
    )
}

export default DetailsPage;
