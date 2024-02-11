import React, { useState, useEffect } from 'react';
import TimeTable from './TimeTable';

const Status = () => {
  const [reservationData, setReservationData] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3dW5zb2hvQG1haWwudWxzYW4uYWMua3IiLCJlbWFpbCI6Ind1bnNvaG9AbWFpbC51bHNhbi5hYy5rciIsImlhdCI6MTcwNzY1MzY5MSwiZXhwIjoxNzA3NjYwODkxfQ.wEIg13vYf5RG-8o9mOKugYxmYMR_7ASCObQpqKToykQ'; // 주어진 토큰

  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const facilityId = 1; // 예약 정보를 가져올 시설의 ID
        const response = await fetch(`http://13.125.247.248:8080/api/v1/reservation/byfacility?facilityId=${facilityId}&page=1`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setReservationData(data.result.resultList);
          console.log(data)
        } else {
          console.error('Failed to fetch reservation data');
        }
      } catch (error) {
        console.error('Error fetching reservation data:', error);
      }
    };

    fetchReservationData();
  }, [token]);

  return (
    <div>
      <h1>예약 현황</h1>
      <TimeTable courses={reservationData} />
    </div>
  );
};

export default Status;