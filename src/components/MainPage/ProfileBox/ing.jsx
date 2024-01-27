import React from 'react';
import * as S from "../ProfileBox/Style/profile.style";

function Ing( ) {
    return (
        <S.ProfileBox>
                <S.Title>
                    <S.Name><span>열린열람실</span></S.Name>
                    <S.Sub><span  style={{ marginLeft: '3px' }}>이용중</span></S.Sub>
                </S.Title>
                <S.Img/>
                <S.ClassInfo>남은 시간 10:23</S.ClassInfo>
                <S.Reservation>
                    <S.VerticalBorder/>
                    <S.Left><span>반납하기</span></S.Left>
                    <S.Right><span>연장하기</span></S.Right>
                </S.Reservation>
            </S.ProfileBox>
    );
}

export default Ing;