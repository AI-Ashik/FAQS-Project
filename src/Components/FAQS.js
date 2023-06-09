import React, { useState } from 'react';
import { faqsData } from './DATA';
import FAQ from './FAQ';
import './faqs.css';

const FAQS = () => {
    const [faqs] = useState(faqsData);
    return (
        <div>
           <main>
           <h2>FAQs</h2>
           {faqs.map(faq=><FAQ key={faq.id} {...faq}/>)}
           </main>
        </div>
    );
};

export default FAQS;
