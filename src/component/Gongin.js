import React from 'react';
import portfolio from '../json/gong.json';

function Gongin(props) {
    return (
        <div id={props.portfolioId} className='py-5 bg-light'>
            <div>
                <h2 className='text-center gjddnm'>
                    {portfolio[props.portfolioId].title}
                </h2>
            </div>
            <div>
                <p className='text-center fs-5'>
                    {portfolio[props.portfolioId].stitle}
                </p>
            </div>
            <ul className='p-0'>
               
                    {
                    portfolio[props.portfolioId].swlist.map(( v , i) =>{
                        return (
                            <li className='text-center container'>
                                <p className='fs-4'>{v.ex}</p>
                                <ul className='ps-5 pe-5 pb-5'>
                                    {
                                        v.thumb.map((item, idx)=>{
                                            return <li key={'p'+idx}><img src={item} className="img-fluid p-5"></img></li>
                                        })
                                    }
                                </ul>
                                <a href='https://github.com/hellolhm' target='_blank'><p className='fs-4 text-white text-center mt-3 p-2 go borr'>구매하러 가기</p></a>
                                {/* 나중에 상품페이지로 연결 */}
                            </li>
                        )
                    })
                    }
              
            </ul>

        </div>
    );
}

export default Gongin;