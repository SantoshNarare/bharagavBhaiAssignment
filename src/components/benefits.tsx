import React from 'react';
import { loremIpsum, name, surname } from "react-lorem-ipsum";
import armchair from "../Assets/Benefits/armchair.svg";
import dumbbell from "../Assets/Benefits/dumbbell.svg";
import eventImg from "../Assets/Benefits/event.svg";
import internetImg from "../Assets/Benefits/internet.svg";
import wifi from "../Assets/Benefits/wifi.svg";

const Benifits = () => {
    const images = [armchair, dumbbell, eventImg, internetImg, wifi];
    return (
        <div className='flex flex-col justify-center items-center my-32'>
            <div className='text-center my-4'>
                <h5 className='text-orange-600'>WHY CHOOSE US?</h5>
                <h3 className='text-4xl my-1'>{loremIpsum({ p: 1, avgWordsPerSentence: 5, avgSentencesPerParagraph: 1 })}</h3>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-6 my-4'>
                {images?.map((item, i: number) => {
                    return (
                        <div key={i} className='flex flex-col justify-center items-center'>
                            <img src={item} alt={`imgBenifits${i}`} />
                            <h2 className='text-lg my-4'>{name()} {surname()}</h2>
                            <h3 className='text-center text-sm my-1'>{loremIpsum({ p: 1, avgWordsPerSentence: 10, avgSentencesPerParagraph: 2 })}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Benifits;
