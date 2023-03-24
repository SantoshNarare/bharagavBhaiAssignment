import React from 'react';
import { loremIpsum } from "react-lorem-ipsum";

const Footer = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-6 justify-items-center gap-16 pb-28 pt-10 mx-10 '>
            <div className='col-span-2'>
                <h4 className='bold text-2xl mb-4'>1-Space</h4>
                <p>{loremIpsum({ p: 1, avgWordsPerSentence: 10, avgSentencesPerParagraph: 1 })}</p>
            </div>
            <div className=''>
                <h5 className='text-orange-600 text-xl'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</h5>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
            </div>
            <div className=''>
                <h5 className='text-orange-600 text-xl'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</h5>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
                <p className='my-2'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</p>
            </div>
            <div className='col-span-2'>
                <h5 className='text-orange-600 text-xl'>{loremIpsum({ p: 1, avgWordsPerSentence: 2, avgSentencesPerParagraph: 1 })}</h5>

            </div>
        </div>
    )
}

export default Footer;
