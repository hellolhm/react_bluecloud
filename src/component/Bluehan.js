import React, { useState } from 'react';
import Gongin from './Gongin';


function Bluehan(props) {
    const [ worknm, worknmupdate ] = useState(['리액트','reactid']); 
    const btnupdate = (e) => {
        
        const newworknm =  e.target.getAttribute('datasrc').split(',');    
        worknmupdate(newworknm);

    }
    return (
        <div id='info'>
            <div className="text-center pt-4 mt-3 pb-3 border bordercolor container">
                <h1>청운한약방</h1>
                <p className='fs-5 mt-3'>우리 몸의 면역력을 키우는 한약</p>
            </div>
            <div className='d-lg-flex mt-4 m-5'>
                <div className='d-lg-flex video me-5'>
                    <div className=' video-container'>
                        <iframe
                        width="100%" height="100%" 
                        src="https://www.youtube.com/embed/trqZJw2Rpc8" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className='pt-lg-4'>
                    <p className='text-center bg-cu text-white bordercolor fs-4'>이런분들께 공진단을 추천합니다</p>
                    <div className='d-flex'>
                    <p className='lh-3 gtext1 '>
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
                            내가 타고나서 가지고 있는 기운이라도 단단히 지키고 몸의 기능이 원활히 돌아가게 하면 오장이 조화를 이루고 백병이 생기지 않게 되는데 공진단 이 처방이 유효하다<br></br>
                            <strong className='fs-4'>-동의보감 "東醫寶鑑"-</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className='pt-5 mt-2 d-flex flex-wrap justify-content-center mb-2'>
                <button onClick={ btnupdate } datasrc={['리액트','reactid']} className="mx-3 bg-cu text-white ps-5 px-5 pt-3 pb-3 border-0 fs-5 borr">원방공진단</button>
                <button onClick={ btnupdate } datasrc={['EC 쇼핑몰','ecid']} className="mx-3 bg-cu text-white ps-5 px-5 pt-3 pb-3 border-0 fs-5 borr">목향공진단</button>
                <button onClick={ btnupdate } datasrc={['Design 피그마','figmaid']} className="mx-3 bg-cu text-white ps-5 px-5 pt-3 pb-3 border-0 fs-5 borr">태양공진단</button>
                <button onClick={ btnupdate } datasrc={['Design 피그마','figma2id']} className="mx-3 bg-cu text-white ps-5 px-5 pt-3 pb-3 border-0 fs-5 borr">침향공진단</button>
                <button onClick={ btnupdate } datasrc={['Design 피그마','figma3id']} className="mx-3 bg-cu text-white ps-5 px-5 pt-3 pb-3 border-0 fs-5 borr">녹용공진단</button>
            </div>
            <Gongin dbobjkey={worknm[0]} portfolioId={worknm[1]}></Gongin>
        </div>
        
    );
};

export default Bluehan;