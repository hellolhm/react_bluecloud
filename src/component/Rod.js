import React from 'react';
import Kakao from './Kakao';
import navicss from '../css/navi.module.css';
import '../App.css';


function Rod() {
    return (
        <div  id='rod' className='container pt-5'>
            <div className='d-lg-flex'>
                <div className='col-lg-12'>
                    <Kakao>
                    </Kakao>
                </div>
                <div className='col-lg-5 col-12 kakaoMap_info mt-4'>
                    <div className='box text-light px-sm-4 py-4 '>
                        <p className='fs-3 text-center bg-white text-black'>청운한의원 오시는 길</p>
                        <dl className='px-2 row m-0'>
                            <dt className='col-sm-3 fs-3 border-bottom'>주소</dt>
                            <dd className='col-sm-9 border-bottom mb-0'>
                                <p className='fs-4'>
                                    강릉시 포남동 하평길 31<br></br>  KR GS마트2층 우진빌딩 2층
                                </p>
                                <p class="rounded-pill d-inline-block">
                                    주차는 건물내 주차장 이용
                                </p>
                            </dd>
                            <dt className='py-3 col-sm-3 border-bottom fs-4'>진료시간</dt>
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
                            
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rod;