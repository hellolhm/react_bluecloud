import React from 'react';
import navicss from '../css/navi.module.css';

function Bluehan() {
    return (
        <div className='container' id='info'>
            <div className={`${navicss.thro} text-center pt-5 mt-5 pb-5 text-white`}>
                <h1>청운한약방</h1>
                <h2>우리 몸을 보호하고 면역력을 키우는 한약</h2>
            </div>
            <div>
                <h3>경옥고</h3>   
            </div>
            <div>
                <h3>관절고</h3>
            </div> 
        </div>
    );
};

export default Bluehan;