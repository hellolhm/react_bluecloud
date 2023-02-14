import React from 'react';
import portfolio from '../json/cont.json';

function Contin(props) {
    return (
        <div id={props.portfolioId} 
        className='py-5'>
            <h2 
            className='text-uppercase text-center'>
                {portfolio[props.portfolioId].title}
            </h2>
            <p className='text-center'>
                {portfolio[props.portfolioId].stitle}
            </p>
            <ul className='p-0'>
               
                    {
                    portfolio[props.portfolioId].swlist.map(( v , i) =>{
                        return <li className='text-center'>
                            <p className='fs-4'>{v.ex}</p>
                            <ul className='p-0 d-lg-flex'>
                                {
                                    v.thumb.map((item, idx)=>{
                                        return <li key={'p'+idx}><img src={item} className="img-fluid ps-3"></img></li>
                                    })
                                }
                            </ul>
                        </li>
                    })
                    }
              
            </ul>

        </div>
    );
}

export default Contin;