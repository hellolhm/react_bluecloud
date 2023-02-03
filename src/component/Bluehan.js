import React from 'react';
import navicss from '../css/navi.module.css';
import '../App.css';

function Bluehan() {
    return (
        <div id='info'>
            <div className={`${navicss.thro} text-center pt-5 mt-5 pb-5 text-white container`}>
                <h1>청운한약방</h1>
                <h3>우리 몸을 보호하고 면역력을 키우는 한약</h3>
            </div>
            <div className='container p-0'>
                <iframe
                width="100%" height="600" 
                src="https://www.youtube.com/embed/trqZJw2Rpc8" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                <h2 className='text-center bg-cu text-white pt-3 pb-3 container'>이런분들께 공진단을 추천합니다</h2>
                <div className='d-flex container'>
                    <div className='text-center col-6 '>
                        <p className='fs-4'>어르신들의 기력보충</p> 
                        <p className='fs-4 d-none d-lg-block'>과도한 스트레스와 만성피로</p>
                        <p className='fs-4'>집중력 향상과 체력관리가 필수인 수험생</p>
                        <p className='fs-4'>간 손상 회복 작용 및 생식능력 개선 목적</p>
                    </div>
                    <div className='text-center col-6'>
                        <p className='fs-4'>각종 신경통</p>
                        <p className='fs-4'>중추신경계 질환</p>
                        <p className='fs-4'>심혈관계 질환</p>
                        <p className='fs-4'>면역질환</p>
                    </div>
                </div>
            </div>
            <div className='text-center pt-5 mt-2 mb-5 pb-5 bg-secondary mt-5'>
                <p className='fs-4 text-white'>선 주문 할인 이벤트 15~20%</p>
                <p className='fs-4 text-white'>한약 문의는 033.651.5005으로 부탁드립니다</p>
            </div> 
        </div>
        
    );
};

export default Bluehan;