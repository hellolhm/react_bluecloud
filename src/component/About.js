import React from 'react';
import '../App.css';
import Cuswiper from './Cuswiper';


function About() {
    return (
        <div id='about'>
            <div>
                <div className='mt-4 pt-5'>
                    <Cuswiper>
                    </Cuswiper>
                </div>
                <div className='container p-0 rounded d-lg-flex p-5 mt-5'>
                    <div className='col-lg-4'>
                        <img src='./img/you.jpg' className='img-fluid borr'></img>
                    </div>
                    <div className='col-lg-8 p-lg-5'>
                        <div>
                            <p className='fs-2'>대표원장 <strong className='fs-1'>김철수</strong></p>
                            <p className='fs-5'>
                                - 경희대학교 한의학과 졸업<br></br>
                                - 경희대학교 한의과 대학 석사<br></br>
                                - 경희대학교 한의과 대학 박사 2기 수료<br></br>
                                - 동서한방병원 수련의 및 전공의<br></br>
                                - 동서한방병원 디스크센터 과장<br></br>
                                - 예일한의원 대표원장 "1993 - 현재"
                            </p>
                        </div>
                        <div>
                        <p className='fs-5'>
                            - KSCPA "한국체력훈련실무자협회" 협회장<br></br>
                            - KASM "한국 스포츠의학 협회" 자문위원<br></br>
                            - 대한스포츠한의학회 정회원<br></br>
                            - FMS level2 "기능적 움직임 검사 2"<br></br>
                            - NASM "미국스포츠의학회" CES "교정운동 전문가"
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center pt-5'>청운한의원은<br></br>건강한 한의원입니다</h2>
                </div>
                <div className={`fs-4 p-lg-5 d-lg-flex text-start`}>
                    <div className='col cubgimg1 text-white'>
                        <p className= "fs-2 pt-lg-4 pb-lg-4">최상품의 한약재</p>
                        <p className='fs-5'> 한의원에 쓰이는 모든 한약재들은 정부에서 실시한<br></br>
                        엄격한 품질검사인 GMP (Good Manufacturing Practice),<br></br>GAP 'Good Agricultural Practice' 를 통과한
                        친환경 한약재입니다. <br></br>또한, 비용이 많이 들어도
                        약효가 최고인<br></br> 원산지에서 온 약재만을 사용합니다.
                        </p>
                    </div>
                    <div className='col cubgimg2 text-white'>
                        <p className= "fs-2 pt-lg-4 pb-lg-4">믿을 수 있는 의료진</p>
                        <p className='fs-5'>
                        저희 한의원은 한의학을 통한 병의 치료와<br></br>
                        건강한 삶의 습관이라는 목적을 가진  한의원입니다. <br></br>
                        믿을 수 있는 전문 의료진,<br></br>
                        청운한의원에서 만나실 수 있습니다.
                        </p>
                    </div>
                    <div className='col cubgimg3 text-white'>
                        <p className= "fs-2 pt-lg-4 pb-lg-4">환자와의 신뢰</p>
                        <p className='fs-5'>환자 한분한분을 온전히 이해하고<br></br>
                        의사와 환자 사이의 신뢰를 쌓을 충분한 시간을 위해<br></br>
                        예일한의원은 100% 예약제로 운영하고 있습니다.<br></br>
                        원장님과 1:1로 충분한 상담을 통해<br></br>
                        개개인의 체질과 상태에 최적인 맞춤진료를 제공합니다.
                        </p>
                    </div>
                </div>
                {/* <div className='pt-4'>
                    <div className='container text-center pt-5 d-flex'>
                    <p className='ps-lg-3 col-lg-4 fs-4 col'>#자동차사고한의원</p>
                    <p className='ps-lg-3 col-lg-4 fs-4 col d-none d-lg-block'>#포남동야간진료한의원</p>
                    <p className='ps-lg-3 col-lg-4 fs-4 col'>#포남동야간한의원</p>
                    </div>
                    <div className='container text-center d-flex'>
                    <p className='ps-lg-3 col-lg-3 col fs-4 d-none d-lg-block'>#강릉야간한의원</p>
                    <p className='ps-lg-3 col-lg-3 col fs-4'>#강릉청운한의원</p>
                    <p className='ps-lg-3 col-lg-3 col fs-4'>#청운한의원</p>
                    <p className='ps-lg-3 col-lg-3 col fs-4 d-none d-lg-block'>#강릉한의원</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default About;