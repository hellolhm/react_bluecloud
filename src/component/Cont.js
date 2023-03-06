import React, { useState } from 'react';



function Cont(props) {
    
    return (
        <div className='container'>
            <div className='pt-3 pb-3 mt-5'>
                <h1 className='text-center pt-4 mt-3 pb-3 border bordercolor'>예약하기</h1>
            </div>
            <div className='d-md-flex justify-content-around '>
                <div className='mb-3 col-md-5'>
                    <label for="exampleFormControlInput1" class="form-label">성함</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" ></input>
                </div>
                <div className='mb-3 col-md-5'>
                    <label for="exampleFormControlInput2" class="form-label">연락처</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2"></input>
                </div>
            </div>
            <div className='d-md-flex justify-content-around'>
                <div className='mb-3 col-md-5'>
                    <label for="wlsfyrhkahr" className="form-label">진료과목</label>
                    <select class="form-select" aria-label="Default select example">
                    <option selected>선택</option>
                    <option value="1">여성건강</option>
                    <option value="2">갱년기</option>
                    <option value="3">다이어트</option>
                    <option value="4">피부</option>
                    <option value="4">공진단</option>
                    </select>
                </div>
                <div className='mb-3 col-md-5'>
                    <label for="day" className="form-label">예약일</label>
                    <input type="date" class="form-control" id="day"></input>
                </div>
            </div>
            <div className='text-center'>
                <label for="ehddml" className="form-label">개인정보활용동의</label>
                <input type="checkbox" id="ehddml" className='ms-2'></input>
            </div>
            <div className='text-center'>
            <button type="submit" class="btn btn-primary">예약하기</button>
            </div>
            <div className='mt-5 bg-light p-5 border border-0 online'>
                
                <div className='d-md-flex'>
                    <div className='col-md-6 pe-5'>
                        <div>
                            <p className='fs-3'>온라인 예약 안내</p>
                        </div>
                        <div>
                            <p className='mb-1'>온라인예약은 당일신청은 어렵습니다. 최소 +1일 이후부터 신청이 가능합니다.</p>
                            <p className='mb-1'>신청하신 내용은 바로 확정되지는 않으며, 담당자 확인후 별도로 안내전화를 드립니다.</p>
                            <p className='mb-1'>신청하신 내용은 메일형식으로 담당자에 전달되며, 별도 저장되지 않습니다.</p>
                            <p className='mb-1'>기타 궁금하신 사항은 전화 033.651.5005로 문의 주시기 바랍니다</p>
                        </div>
                    </div>
                    <div className='col-md-6 ps-5'>
                        <div>
                            <p className='fs-3'>개인정보 수집 및 이용 목적</p>
                        </div>
                        <div>
                            <p className='mb-1'>홈페이지 온라인 예약 신청을 위한 개인신상 정보 확인</p>
                            <p className='mb-1'>수집하는 개인정보의 항목 : 이름, 연락처, 이메일</p>
                            <p className='mb-1'>개인정보 보유 및 이용기간 : 예약확인 통화 후 신청메일 즉시 삭제</p>
                            <p className='mb-1'>※  개인정보 수집 이용 동의는 거부하실 수 있으며, 거부하실 경우 서비스 이용에 제한될 수 있음을 알려드립니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cont;