import React from "react";

import * as S from "./styled";

const Step = ({
  onBack,
  handleSubmit,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
  onFinish,
}) => {
  return (
    <S.Step onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && (
          <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>
        )}
        {hasNextButton ? (
          <S.GoNextButton type="submit">Next Step</S.GoNextButton>
        ) : (
          <S.GoNextButton onClick={onFinish} type="button">
            Confirm
          </S.GoNextButton>
        )}
      </S.StepFooter>
    </S.Step>
  );
};

export default Step;
