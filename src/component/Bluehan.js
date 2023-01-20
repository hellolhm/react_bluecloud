import React from 'react';
import navicss from '../css/navi.module.css';
import Gjdswiper from './Gjdswiper';
import Kogswiper from './Kogswiper';

function Bluehan() {
    return (
        <div className='container' id='info'>
            <div className={`${navicss.thro} text-center pt-5 mt-5 pb-5 text-white`}>
                <h1>청운한약방</h1>
                <h2>우리 몸을 보호하고 면역력을 키우는 한약</h2>
            </div>
            <div>
                <Kogswiper></Kogswiper>
                <h2 className='text-center bg-dark text-white pt-3 pb-3'>이런분들께 경옥고를 추천합니다</h2>
                <div className='text-center'>
                    <p className='fs-4'>면역력 증진이 필요한 분</p>
                    <p className='fs-4'>기초체력이 부족한 분</p>    
                    <p className='fs-4'>식욕부진 또는 소화불량과 위염을 달고 사시는분</p>    
                    <p className='fs-4'>또래보다 작은 아이</p>    
                    <p className='fs-4'>각종 호흡기 질환을 오래 앓으신 분</p>    
                    <p className='fs-4'>입마름, 피부건조증으로 고생하는 어르신의 진액보강</p>    
                    <p className='fs-4'>갱년기 증상으로 힘들어 하는 어머님</p>    
                </div>
            </div>
            <div>
                <Gjdswiper></Gjdswiper>
                <h2 className='text-center bg-dark text-white pt-3 pb-3'>이런분들께 공진단을 추천합니다</h2>
                <div className='d-flex'>
                    <div className='text-center col-6 pt-5'>
                        <p className='fs-4'>어르신들의 기력보충</p> 
                        <p className='fs-4'>과도한 스트레스와 만성피로</p>
                        <p className='fs-4'>잦은 회식으로  간 기능이 걱정인 직장인</p>
                        <p className='fs-4'>집중력 향상과 체력관리가 필수인 수험생</p>
                    </div>
                    <div className='text-center col-6 bg-dark text-white'>
                        <p className='fs-4'>중풍, 구안와사등<br></br> 마비질환</p>
                        <p className='fs-4'>각종 신경통</p>
                        <p className='fs-4'>중추신경계 질환</p>
                        <p className='fs-4'>심혈관계 질환</p>
                        <p className='fs-4'>면역질환</p>
                        <p className='fs-4'>간 손상 회복 작용 및 생식능력 개선 목적</p>
                    </div>
                </div>
                <div className='text-center pt-5 mt-5 mb-5'>
                    <p className=' tjswnans'>선 주문 할인 이벤트 15~20%</p>
                    <p className='fs-4'>한약 문의는 033.651.5005으로 부탁드립니다</p>
                </div>
            </div> 
        </div>
    );
};

export default Bluehan;