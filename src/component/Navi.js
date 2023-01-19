import React, { useState } from 'react';
import navicss from '../css/navi.module.css';
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import naviDBfile from "../json/navi.json";

function Navi(props) {
    const [ naivText, updateText ] = useState(true);
    // json -> map
   
    return (
        <div className={`${navicss.hd}  border-bottom  py-2  fixed-top`}>
            <header id="hd" className='container-lg d-lg-flex flex-wrap justify-content-between align-items-center'>
                <h1>
                  <Link to="/"><img src='img/logo.svg' className={navicss.logo}></img></Link>
                </h1>
                <Scrollspy id="gnb" className='d-flex ps-5 ms-5'>                
                    {
                        naviDBfile.naviDATA.map((item, idx)=>{
                            const myclass = item.d1.cls.join(" ");

                           return (
                            item.d1.type == !"a" ?
                            (<li key={'navi'+idx}><Link to={item.d1.href} className={myclass}>{item.d1.naviText}</Link></li>) : 
                            (<li key={'navi'+idx}><a href={item.d1.href} className={myclass}>{item.d1.naviText}</a></li>)
                           )
                            
                        })
                    }
                </Scrollspy>
                <ul id="sns" className='d-flex'>
                    <li><a href="" target="_blank" className='px-3 font141618'>깃</a></li>
                    <li><a href="" target="_blank" className='px-3 font141618'>노션</a></li>
                    <li><a href="" target="_blank" className='px-3 font141618'>기획</a></li>
                </ul>
            </header>
            
        </div>
    );
}

export default Navi;