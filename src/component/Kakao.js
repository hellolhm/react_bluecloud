import React, { useEffect } from "react";

const { kakao } = window;

function Kakao() {


    
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            // center: new kakao.maps.LatLng(37.7705167, 128.9121452), //지도의 중심좌표.
            center: new kakao.maps.LatLng(37.7705167, 128.9121452), //지도의 중심좌표.
            level: 1 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        
        // map.setDraggable(false);
        map.setZoomable(false);
        
        
        
        const markerPosition  = new kakao.maps.LatLng(37.7705167, 128.9121452);// 마커가 표시될 위치입니다
        
        const imageSrc = '/img/maker.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(80, 80), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(48, 140)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition, 
            image: markerImage // 마커이미지 설정 
        });
        
        
        
        marker.setMap(map);
        
        
    },[])
    
    
    
    
    return(
        <div id="map" style={{
            width:'100%', 
            height:'500px'
            }}></div>
    )
}

export default Kakao;



  