import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from "react-lorem-ipsum";
import serviceimg from '../Assets/image10.jpg';
import CalenderImg from "../Assets/Group 46.png";

type Props = {
    isImageWillBeFirst: Boolean;
}
const Service = ({ isImageWillBeFirst = true }: Props) => {
    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 my-32'>
            <div className={`${!isImageWillBeFirst ? "order-last justify-self-start" : ""} relative`}>
                <img className='BannerMainImg w-4/5' src={serviceimg} alt="serviceimg" />
                <img className='serviceCalenderImg shadow-2xl' src={CalenderImg} alt="CalenderImg" />
            </div>
            <div className='justify-self-start self-center'>
                <h5 className='text-orange-600'>SERVICE</h5>
                <h3 className='text-4xl my-1'>{loremIpsum({ p: 1, avgWordsPerSentence: 5, avgSentencesPerParagraph: 1 })}</h3>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                <button onClick={() => navigate("/details")} className='bg-orange-500 text-white p-2 rounded-sm mt-10'>View Avaibility</button>
            </div>
        </div>
    )
}

export default Service;
