import React from "react";

import * as S from "./styled";
import { Items } from "./constants.js";

const Sidebar = ({ activeStep }) => {
  return (
    <S.Sidebar>
      {Items.map((item) => (
        <S.Item key={item.id} isActive={activeStep === item.id}>
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.SubTitle>{item.subtitle}</S.SubTitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  );
};

export default Sidebar;
