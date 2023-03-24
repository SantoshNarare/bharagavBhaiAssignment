import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loremIpsum } from "react-lorem-ipsum";
import serviceimg from '../Assets/image10.jpg';
import img1 from "../Assets/image 50.jpg";
import img2 from "../Assets/Mask Group.jpg";
import img3 from "../Assets/asd.jpg";

const Solution = () => {
    const images = [img1, img2, img3, serviceimg];
    const navigate = useNavigate();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-16 my-32'>
            <div className='justify-self-start self-center'>
                <h5 className='text-orange-600'>SOLUTIONS</h5>
                <h3 className='text-4xl my-1'>{loremIpsum({ p: 1, avgWordsPerSentence: 5, avgSentencesPerParagraph: 1 })}</h3>
                <p className='leading-loose mb-4'>{loremIpsum({ p: 1 })}</p>
                <button onClick={() => navigate("/details")} className='bg-orange-500 text-white p-2 rounded-sm mt-10'>View Avaibility</button>
            </div>
            <div className='sulutionImgScrollView'>
                {images?.map((img, i: number) => {
                    return (
                        <img key={i} className='w-3/5 rounded-xl mx-4' src={img} alt={`img${i}`} />
                    )
                })}
            </div>
        </div>
    )
}

export default Solution;
