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
                <button onClick={ btnupdate } datasrc={['리액트','reactid']} className="mx-3 bg-dark text-white ps-3 px-3 pt-1 pb-1 border-0">React<br></br> 자소서</button>
                <button onClick={ btnupdate } datasrc={['EC 쇼핑몰','ecid']} className="mx-3 bg-dark text-white ps-3 px-3 pt-1 pb-1 border-0">Bootstrap<br></br> Corsair</button>
                <button onClick={ btnupdate } datasrc={['Design 피그마','figmaid']} className="mx-3 bg-dark text-white ps-3 px-3 pt-1 pb-1 border-0">Design<br></br> 피그마</button>
            </div>
            <Contin dbobjkey={worknm[0]} portfolioId={worknm[1]}></Contin>
            <div className='container'>
                <div className='d-flex'>
                    <p>
                        <label>회사명</label>
                        <input type="text" name="company"class="d-block mt-3" placeholder="회사명을 입력해 주세요."></input>
                    </p>
                    <p className='ms-5'>
                        <label>회사위치</label>
                        <input type="text" name="company_w"class="d-block mt-3" placeholder="회사위치를 입력해 주세요."></input>
                    </p>
                </div>
                <div>
                    <p>채용직무</p>
                        <div>
                            <input type="checkbox" id="work1" ></input>
                            <label for="work1" className="ms-2 fs-6">프론트엔드</label>
                            <input type="checkbox" id="work2" className="ms-2"></input>
                            <label for="work2" className="ms-2 fs-6">퍼블리셔</label>
                            <input type="checkbox" id="work3" className="ms-2"></input>
                            <label for="work3" className="ms-2 fs-6">기획자</label>
                            <input type="checkbox" id="work4" className="ms-2"></input>
                            <label for="work4" className="ms-2 fs-6">디자이너</label>
                            <input type="checkbox" id="work5" className="ms-2"></input>
                            <label for="work5" className="ms-2 fs-6">기타</label>
                        </div>
                </div>
                <div className='mt-3'>
                    <p>주력언어</p>
                    <div>
                        <input type="checkbox" id="lang1" ></input>
                        <label for="lang1" className="ms-2 fs-6">리액트</label>
                        <input type="checkbox" id="lang2" className="ms-2"></input>
                        <label for="lang2" className="ms-2 fs-6">노드</label>
                        <input type="checkbox" id="lang3" className="ms-2"></input>
                        <label for="lang3" className="ms-2 fs-6">PHP</label>
                        <input type="checkbox" id="lang4" className="ms-2"></input>
                        <label for="lang4" className="ms-2 fs-6">자바스크립트</label>
                        <input type="checkbox" id="lang5" className="ms-2"></input>
                        <label for="lang5" className="ms-2 fs-6">제이쿼리</label>
                        <input type="checkbox" id="lang6" className="ms-2"></input>
                        <label for="lang6" className="ms-2 fs-6">CMS</label>
                    </div>
                </div>
                <div className='mt-3'>
                    <p class="m-0">
                        <label >담당자님 연락처</label>
                        <input type="text" name="talk"class="d-block mt-3 w-50" placeholder="담당자님의 연락처를 알려주세요."></input>
                    </p>
                    <p className='mt-3'>
                        <label >면접날짜, 시간</label>
                        <input type="text" name="talk"class="d-block mt-3 w-50" placeholder="2023.00.00 2시"></input>
                    </p>
                    </div>
                    <div className='mt-3'>
                        <p>남기실 말
                            <textarea className='d-block p-0 w-50 mt-3'></textarea>
                        </p>
                    </div>
                    <div>
                        <input type="submit" value="보내기" className='mt-5'></input>
                    </div>
                    <div>
                        <p className='fs-3 text-end'>봐주셔서 감사합니다.</p>
                    </div>
                </div>
                
        </div>
    );
}

export default Cont;