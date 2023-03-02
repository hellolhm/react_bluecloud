import React, { useState } from 'react';



function Cont(props) {
    
    return (
        <div>
            <div className='pt-3 pb-3 mt-5'>
                <h1 className='text-center pt-4 mt-3 pb-3 border bordercolor container'>예약하기</h1>
            </div>
            <div className='d-md-flex container'>
                <div className='mb-3 col-md-6'>
                    <label for="exampleFormControlInput1" class="form-label">성함</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" ></input>
                </div>
                <div className='mb-3 col-md-6'>
                    <label for="exampleFormControlInput2" class="form-label">연락처</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2"></input>
                </div>
            </div>
            
        </div>
    );
}

export default Cont;