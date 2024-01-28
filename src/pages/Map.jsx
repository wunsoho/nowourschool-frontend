import React, { useEffect, useRef, useState } from "react";
import { renderToString } from 'react-dom/server';
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContent, MapHeader, MapMenu, MapTitle, MapNotice, GoogleMap, MarkerInfo, InfoPic, InfoTitle, InfoTime, InfoWord, InfoContent, InfoButton, InfoDetail, InfoReservation } from "../styled/Map.styled";
import InfoPicImg from '../img/roomimg.png'

function Map() {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const ref = useRef();
    const myStyles = [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ];
  
    useEffect(()=>{
        const newMap = new window.google.maps.Map(ref.current, {
            center: { lat: 35.5437, lng: 129.2562 },
            zoom: 17,
            options: {disableDefaultUI: true, styles: myStyles}
        });
        setMap(newMap);
    },[])

    useEffect(() => {
      if (map) {
          const markerPositions = [
            { label: "26", name: "행정본관", lat: 35.5437926, lng: 129.2570589 },
            { label: "01", name: "화학공학관", lat: 35.5447236 , lng: 129.2557155 },
            { label: "02", name: "기계항공관", lat: 35.5450147, lng: 129.2550313 },
            { label: "03", name: "공학행정관", lat: 35.54519, lng: 129.2557 },
            { label: "04", name: "학생회관별관", lat: 35.544598, lng: 129.2544758 },
            { label: "05", name: "산학협력리더스홀", lat: 35.5440703, lng: 129.2545591 },
            { label: "06", name: "조형관", lat: 35.5433204, lng: 129.2548091 },
            { label: "07", name: "전기/컴퓨터공학관", lat:35.5442408, lng:129.2558271 },
            { label: "08", name: "자연과학관", lat: 35.5429038, lng: 129.2566978 },
            { label: "09", name: "대학회관/해송홀", lat: 35.5446259, lng: 129.2570033 },
            { label: "10", name: "문수관", lat: 35.5435148, lng: 129.255559 },
            { label: "11", name: "교수연구동", lat: 35.5429594, lng: 129.2558368 },
            { label: "12", name: "체육관", lat: 35.5454313, lng: 129.2581143 },
            { label: "13", name: "동아리관1", lat: 35.5439871, lng: 129.2586421 },
            { label: "14", name: "인문관", lat: 35.542515, lng: 129.2574755 },
            { label: "15", name: "사회과학관", lat: 35.5420428, lng: 129.2576144 },
            { label: "16", name: "아산도서관", lat: 35.5431896, lng: 129.2580953 },
            { label: "18", name: "재료/산업공학관", lat: 35.5449474, lng: 129.2538597 },
            { label: "19", name: "기초과학실험동", lat: 35.5441259, lng: 129.2539203 },
            { label: "20", name: "시청각교육관", lat: 35.541404, lng: 129.2566979 },
            { label: "21", name: "학군단", lat: 35.5439315, lng: 129.2589476 },
            { label: "22", name: "학생회관", lat: 35.5445981, lng: 129.2586143 },
            { label: "23", name: "건설환경공학관", lat: 35.5455979, lng: 129.2549201 },
            { label: "24", name: "경영관", lat: 35.5422928, lng: 129.2564756 },
            { label: "25", name: "청운학사 무거관", lat: 35.5471533, lng: 129.2557533 },
            { label: "27", name: "해양공학수조", lat: 35.5448202, lng: 129.2520315 },
            { label: "28", name: "예술관(디자인학부/미술학부)", lat: 35.54312, lng: 129.2542 },
            { label: "29", name: "예술관(음악학부)", lat: 35.54356, lng: 129.2542 },
            { label: "30", name: "공장실험동", lat: 35.5454868, lng: 129.2538925 },
            { label: "31", name: "동아리관2", lat: 35.543876, lng: 129.2592253 },
            { label: "32", name: "조소실습동", lat: 35.54512, lng: 129.2506 },
            { label: "34", name: "식물원", lat: 35.5417373, lng: 129.25717 },
            { label: "35", name: "산학협동관", lat: 35.5449646, lng: 129.2529961 },
            { label: "36", name: "서점 및 북카페", lat: 35.5447, lng: 129.2583 },
            { label: "37", name: "생활과학관", lat: 35.5425427, lng: 129.2554202 },
            { label: "38", name: "청운학사 목련관", lat: 35.54753, lng: 129.2559 },
            { label: "39", name: "아산스포츠센터", lat: 35.5444593, lng: 129.2594753 },
            { label: "40", name: "아산도서관 신관", lat: 35.5425428, lng: 129.2584477 },
            { label: "41", name: "조선해양공학관", lat: 35.54509, lng: 129.2518 },
            { label: "42", name: "조선해양공학시험동", lat: 35.54519, lng: 129.2512 },
            { label: "43", name: "국제관", lat: 35.5465, lng: 129.2555 },
            { label: "44", name: "건축관", lat: 35.54597, lng: 129.2566 },
            { label: "45", name: "청운학사 기린관", lat: 35.5467, lng: 129.2567 },
            { label: "46", name: "KCC 생활관", lat: 35.5463496, lng: 129.258045 },
            { label: "S01", name: "미래융합관", lat: 35.5123026, lng: 129.2975689 }
          ];

          const newMarkers = markerPositions.map(position => {
              return new window.google.maps.Marker({
                  position: { lat: position.lat, lng: position.lng },
                  map: map,
                  title: position.name,
                  label:  {
                    text: position.label,
                    color: '#FFFFFF',
                  },
                  icon: {
                    url: `data:image/svg+xml;utf-8,${encodeURIComponent(
                      renderToString(
                        <FontAwesomeIcon icon="location-pin" style={{ color: '#1FBC70' }} />
                      )
                    )}`,
                    anchor: new window.google.maps.Point(20, 27),
                    scaledSize: new window.google.maps.Size(30, 30),
                    labelOrigin: new window.google.maps.Point(15, 12),
                  },
              });
          });

          setMarkers(newMarkers);
      }
  }, [map]);

  return (
    <MapContent>
        <MapHeader>
            <MapMenu to="/category">
              <FontAwesomeIcon
                  icon="bars"
                  style={{ fontSize: '1.6em' }} />
            </MapMenu>
            <MapTitle>지도</MapTitle>
        </MapHeader>
        <MapNotice>마커 클릭시 건물 정보를 확인할 수 있습니다.</MapNotice>
        <GoogleMap
            ref={ref}
            id="map"
            style={{ width: "100%", height: "100vh"}}
        ></GoogleMap>
        <MarkerInfo>
          <InfoContent>
            <InfoPic alt="InfoImg" src={InfoPicImg}>
            </InfoPic>
            <InfoWord>
              <InfoTitle>
                학생식당
              </InfoTitle>
              <InfoTime>
                이용 가능 시간<br />
                아침식사 : 09:00 ~ 17:00<br />
                점심식사 : 09:00 ~ 17:00<br />
                저녁식사 : 09:00 ~ 17:00<br />
                브레이크 타임 : 09:00 ~ 17:00
              </InfoTime>
            </InfoWord>
          </InfoContent>
          <InfoButton>
            <InfoDetail to="/detailinfo">상세정보</InfoDetail>
          </InfoButton>
        </MarkerInfo>
    </MapContent>
  );
}

export default Map;