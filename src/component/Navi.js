import React, { useState } from 'react';
import navicss from '../css/navi.module.css';
import '../App.css';
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
                  <Link to="/"><img src='img/logo.svg' className={`${navicss.logo} img-fluid`}></img></Link>
                </h1>
                <Scrollspy id="gnb" className='d-md-flex d-none d-md-block pt-3'>                
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
                
                <button className='d-md-none navibtn'>햄버거</button>
                <div className='bg-white d-md-none d-block'>
                    <Scrollspy id="mgnb">                
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
                </div>
            </header> 
        </div>
    );
}

export default Navi;