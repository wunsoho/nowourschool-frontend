import React from 'react';
import * as S from "../styled-components/profile.style";
function Profile() {
    return (
            <S.ProfileBox>
                <S.Title>
                    <S.Name><span>김민지</span></S.Name>
                    <S.Sub><span>님</span></S.Sub>
                </S.Title>
                <S.Img/>
                <S.ClassInfo>울산대학교 디지털콘텐츠디자인학과</S.ClassInfo>
                <S.Reservation>
                    <S.VerticalBorder/>
                    <S.Left><span>예약내역</span></S.Left>
                    <S.Right><span>예약하기</span></S.Right>
                </S.Reservation>
            </S.ProfileBox>
    );
}

export default Profile;