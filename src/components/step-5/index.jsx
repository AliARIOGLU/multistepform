import React from "react";

import * as S from "./styled";
import ThankYouIcon from "../../assets/images/icon-thank-you.svg";

const Step5 = ({ ...props }) => {
  const { title, subtitle } = props;

  return (
    <S.Step5>
      <S.Icon src={ThankYouIcon} />
      <S.Title>{title}</S.Title>
      <S.Description>{subtitle}</S.Description>
    </S.Step5>
  );
};

export default Step5;
