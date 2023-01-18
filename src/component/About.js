import React from 'react';
import navicss from '../css/navi.module.css';
import Cuswiper from './Cuswiper';


function About() {
    return (
        <div id='about'>
            <div>
                <div className='mt-4 pt-5'>
                    <Cuswiper>
                    </Cuswiper>
                </div>
                <div className='text-center fs-4'>
                    <p className={`fs-1 pt-5 pb-lg-5 container`}>저희 청운 한의원은</p>
                    <p> 전 직원 마스크 착용 및 손소독을 철저히 하며<br></br>
                        접수 시 손소독과 체온 측정 뒤에 입장가능합니다
                    </p> 
                    <p>
                        청운 한의원에서는 마스크를 두고 오신<br></br> 환자분들을 위해
                        일회용 마스크를 항상 <br></br>구비하고 있습니다.<br></br>
                    </p>
                    <p>
                        베드 소독 또한 수시로 진행하고 있으며, <br></br>
                        침, 사혈 부항, 주사기는 1회용으로 <br></br>안심하시고 치료받으실 수 있습니다.
                    </p>
                </div>
                <div>
                    <div className='container text-center pt-5 fs-5 d-flex'>
                    <p className='ps-lg-3 col-lg-4 col'>#자동차사고한의원</p>
                    <p className='ps-lg-3 col-lg-4 col d-none d-sm-block'>#포남동야간진료한의원</p>
                    <p className='ps-lg-3 col-lg-4 col'>#포남동야간한의원</p>
                    </div>
                    <div className='container text-center fs-5 d-flex'>
                    <p className='ps-lg-3 col-lg-3 col d-none d-sm-block'>#강릉야간한의원</p>
                    <p className='ps-lg-3 col-lg-3 col'>#강릉청운한의원</p>
                    <p className='ps-lg-3 col-lg-3 col'>#청운한의원</p>
                    <p className='ps-lg-3 col-lg-3 col'>#강릉한의원</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;