import React from 'react';
import Kakao from './Kakao';
import navicss from '../css/navi.module.css';

function Rod() {
    return (
        <div className='container mt-5 pt-5'>
            <div>
                <h1 id='rod' className={`${navicss.thro} text-center text-white pt-5 pb-5`}>
                    청운한의원 오시는 길
                </h1>
            </div>
            <div>
                <Kakao>
                </Kakao>
            </div>
            <div className='d-lg-flex'>
                <div className={`${navicss.thro} col-lg-5 col-12 container text-center text-white`}>
                    <p className='fs-3 pt-3 '>주소 :<br></br>  강릉시 포남동 하평길 31<br></br>  KR GS마트2층 우진빌딩 2층</p>
                    <p className='fs-3 '>주차장 : <br></br> 지하1층(건물 뒷편 주차장 입구)</p>
                    <p className='fs-3 pt-3'>
                            평일 09:00 - 18:00 <br></br>
                            점심시간 13:00~14:00 <br></br>
                            야간진료(월/목) 18:00~20:00<br></br>
                            토요일 09:00 - 13:00 <br></br>
                            일요일 휴무<br></br>
                            공휴일 전화문의 : 033.651.5005
                    </p>
                </div>
                <div className='col-lg-7 col-12 d-lg-flex'> 
                    <img src='img/main00.png' className='img-fluid h-75 pt-5 ps-5 mt-5'></img>
                </div> 
            </div>
        </div>
    );
};

export default Rod;