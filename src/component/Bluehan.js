import React from 'react';
import navicss from '../css/navi.module.css';
import '../App.css';

function Bluehan() {
    return (
        <div id='info'>
            <div className={`text-center pt-4 mt-3 pb-3  border bordercolor`}>
                <h1>청운한약방</h1>
                <p className='fs-5 mt-3'>우리 몸의 면역력을 키우는 한약</p>
            </div>
            <div className='d-lg-flex mt-4'>
                <div className='d-lg-flex video'>
                    <div className=' video-container'>
                        <iframe
                        width="100%" height="100%" 
                        src="https://www.youtube.com/embed/trqZJw2Rpc8" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className='ps-lg-5 pt-lg-3 pe-lg-3'>
                    <p className='text-center bg-cu text-white pb-3 p-3 fs-3'>이런분들께 공진단을 추천합니다</p>
                    <div className='d-flex'>
                    <p className='lh-3 gtext1'>
                    - 어르신들의 기력보충<br></br>
                    - 과도한 스트레스와 만성피로<br></br>
                    - 집중력 향상과 체력관리가 필수인 수험생<br></br>
                    - 간 손상 회복 작용 및 생식능력 개선 목적<br></br>
                    - 각종 신경통<br></br>
                    - 중추신경계 질환<br></br>
                    - 심혈관계 질환<br></br>
                    - 면역질환
                    </p>
                    </div>
                    <div>
                        <p className='gtext2'>
                            남자가 장성해서도 양기가 약하다면
                            이것은 타고나기를<br></br> 약하게 타고난 것이지
                            허해져서 그런것이 아니다.
                            이럴때<br></br> 함부로 양기만을 도와주는
                            조하고 삽한 약을 쓰면 안된다.<br></br>
                            滋益하는 약을 써야 하는데
                            그런 약도 여러가지가 많지만<br></br>
                            약력이 약해서 효과를 보기 어렵다.<br></br><br></br>
                            오로지 내가 타고나서 가지고 있는 기운이라도 단단히 지키고<br></br>
                            몸의 기능이 원활히 돌아가게 하면 오장이 조화를 이루고<br></br>
                            백병이 생기지 않게 되는데
                            공진단 이 처방이 유효하다.<br></br>
                            <strong className='fs-4'>-동의보감 "東醫寶鑑"-</strong>
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='text-center pt-5 mt-2 mb-5 pb-5 bg-secondary mt-5'>
                <p className='fs-4 text-white'>선 주문 할인 이벤트 15~20%</p>
                <p className='fs-5 text-white'>한약 문의는 033.651.5005으로 부탁드립니다</p>
            </div>  */}
        </div>
        
    );
};

export default Bluehan;