import React, { useState } from "react";

import Step from "../step";
import * as S from "./styled";
import FormsJSON from "../../../form.json";

const Step1 = ({ onStepSubmit, formData, ...props }) => {
  const { step1 } = FormsJSON;

  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fromProperties = Object.fromEntries(formData);

    //VALIDATION RULES BURADA OLMALI (YAZ)

    if (
      Object.keys(fromProperties).some((el) => fromProperties[`${el}`] === "")
    ) {
      setError(true);
    } else {
      onStepSubmit("step1", "step2", fromProperties);
    }
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} hasError={error}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              defaultValue={formData.step1[item.id]}
              id={item.id}
              name={item.id}
              type={item.type}
              placeholder={item.placeholder}
            />
            {error && <S.ErrorMessage>{item.errorMessage}</S.ErrorMessage>}
          </S.FormItem>
        ))}
      </S.Step1>
    </Step>
  );
};

export default Step1;
