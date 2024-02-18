import React from 'react';
import * as S from "../styled-components/none.style"

function None() {
    return (
        <S.BoxLine>
            <S.Phrase>현재 이용중인 시설이 없습니다.</S.Phrase>
            <S.Reservation>
                    <S.VerticalBorder/>
                    <S.Left><span>예약내역</span></S.Left>
                    <S.Right><span>예약하기</span></S.Right>
                </S.Reservation>
        </S.BoxLine>
    );
}

export default None;