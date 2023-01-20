import React from 'react';
import portfolio from '../json/cont.json';

function Contin(props) {
    return (
        <div id={props.portfolioId} 
        className='py-5'>
            <h2 
            className='text-uppercase text-center'>
                {props.portfolioId}
            </h2>
            <p className='text-center'>
                {portfolio[props.portfolioId].title}
            </p>
            <ul >
               <li>

               </li>
            </ul>

        </div>
    );
}

export default Contin;