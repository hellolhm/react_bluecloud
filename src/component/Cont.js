import React, { useState } from 'react';
import navicss from '../css/navi.module.css';
import Contin from './Contin';


function Cont(props) {
    const [ worknm, worknmupdate ] = useState(['리액트','reactid']); 
    const btnupdate = (e) => {
        
        const newworknm =  e.target.getAttribute('datasrc').split(','); 
        //e.target.getAttribute('datasrc') -> array 데이터로 인식 못함 / '리액트,reactid'
        //,를 기준으로 정렬로 데이터타입변환하는 메서드 split
        //dataset 메서드     
        //아쉽다!!   data-옵션      
        worknmupdate(newworknm);

    }
    return (
        <div className='pt-lg-5 mt-lg-5 container'>
            <div className={`bg-dark text-center pt-3 pb-2 mb-5 mt-lg-5 text-white`}>
                <h1 id='contact' >CONTACT</h1>
                <p className='fs-4'>맘에 드신다면 연락주세요</p>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={ btnupdate } datasrc={['리액트','reactid']} className="mx-3 bg-dark text-white ps-3 px-3 pt-1 pb-1 border-0">React 자소서</button>
                <button onClick={ btnupdate } datasrc={['EC 쇼핑몰','ecid']} className="mx-3 bg-dark text-white ps-3 px-3 pt-1 pb-1 border-0">Corsair 제작페이지</button>
                <button onClick={ btnupdate } datasrc={['Design 피그마','figmaid']} className="mx-3 bg-dark text-white ps-3 px-3 pt-1 pb-1 border-0">Design 피그마</button>
            </div>
            <Contin dbobjkey={worknm[0]} portfolioId={worknm[1]}></Contin>
            <div className='container'>
                <p className='fs-4'>이름 : 이효명</p>
                <p>openkakao : hello이효명</p>
            </div>
            <div>
                <p className='fs-3 text-end'>봐주셔서 감사합니다.</p>
            </div>
        </div>
    );
}

export default Cont;