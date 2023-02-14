import React from 'react';
import Kakao from './Kakao';
import navicss from '../css/navi.module.css';
import '../App.css';

function Rod() {
    return (
        <div className='container pt-5'>
            <div className='pt-5'>
                <h1 id='rod' className={`${navicss.thro} text-center text-white py-5`}>
                    청운한의원 오시는 길
                </h1>
            </div>
            <div className='d-lg-flex'>
                <div className='col-lg-12'>
                    <Kakao>
                    </Kakao>
                </div>
                <div className='col-lg-5 col-12 kakaoMap_info mt-4'>
                    <div className='box text-light px-sm-4 py-5'>
                        <dl className='px-2 row m-0'>
                            <dt className='col-sm-3 fs-3 border-bottom'>주소</dt>
                            <dd className='col-sm-9 border-bottom mb-0'>
                                <p>
                                    강릉시 포남동 하평길 31<br></br>  KR GS마트2층 우진빌딩 2층
                                </p>
                                <p class="rounded-pill bg-cu color-black py-1 px-2 d-inline-block">
                                    주차는 건물내 주차장 이용
                                </p>
                            </dd>
                            <dt className='py-3 col-sm-3 border-bottom'>
                                <h2 class="ks5 ">진료시간</h2>
                            </dt>
                            <dd className='py-3 col-sm-9 row border-bottom m-0 ps-0'>
                                <strong class="col-sm-4 ps-4">  평일 </strong>
                                <span class="col-sm-8 ps-4">오전 9시 ~ 오후 6시</span>
                                <strong class="col-sm-4 ps-4 mt-2 mt-sm-0"> 	토요일 </strong>
                                <span class="col-sm-8 ps-4">오전 9시 ~ 오후 1시</span>
                                <strong class="col-sm-4 ps-4 mt-2 mt-sm-0"> 	야간진료 </strong>
                                <span class="col-sm-8 ps-4">오후 6시 ~ 오후 8시</span>
                                <strong class="col-sm-4 ps-4 mt-2 mt-sm-0"> 	점심시간 </strong>
                                <span class="col-sm-8 ps-4">오후 1시00분 ~ 2시00분</span>
                            </dd>
                            <dt className='col-sm-3 fs-4 mt-3'>문의전화</dt>
                            <dd class="col-sm-9 mt-2 pb-0">
                                <a href="tel:033.651.5005" className='text-white fs-2 ps-3'>033.651.5005</a>
                            </dd>
                            <dt>
                                <button onclick="setCenter()" class="border mb-2 mb-sm-0 w-100 px-3 py-1 text-light f17 border-w-2">지도중심 이동</button>
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rod;