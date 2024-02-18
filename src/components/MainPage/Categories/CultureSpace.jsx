import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";


function CultureSpace(){
    const {state} = useLocation();

    const [facilityData, setFacilityData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
              const result = await axios.get(
                `https://localhost:8080/api/v1/facility/keyword/${state.keyword["cultural"]}`,
                {
                  headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiZW1haWwiOiJ0ZXN0MTExMUBtYWlsLnVsc2FuLmFjLmtyIiwiaWF0IjoxNzA4MjUwOTY0LCJleHAiOjE3MDgyNTgxNjR9.JI4N0BnMxMvPesFK8axiz67jxhRHUIVVNdA9f1hks7g",
                  },
                }
              );
              if (result.data.isSuccess === true) {
                setFacilityData(result.data.result.list);
                console.log(facilityData);
              } else {
                console.error("서버 응답 오류:", result.data.message);
              }
            } catch (error) {
              console.error("서버 요청 오류:", error);
            }
          };
        fetchData();
      }, []);
    return(
        <div>
        <p>문화공간</p>
        </div>
    );
}

export default CultureSpace;