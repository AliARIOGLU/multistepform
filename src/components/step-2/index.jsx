import React, { useState } from "react";

import Step from "../step";
import * as S from "./styled";
import FormsJSON from "../../../form.json";

import {
  Icons,
  DEFAULT_PLAN,
  DEFAULT_BILLING_TYPE,
  MONTHLY,
  YEARLY,
  errorMessage,
} from "./constants.js";

const Step2 = ({ onStepSubmit, formData, ...props }) => {
  const [plan, setPlan] = useState(formData.step2.plan);

  const [error, setError] = useState(false);

  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? DEFAULT_BILLING_TYPE
  );

  const { step2 } = FormsJSON;

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const changeBillingType = (newBillingType) => {
    setBillingType(newBillingType);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!plan) {
      setError(true);
    } else {
      setError(false);
      onStepSubmit("step2", "step3", {
        billingType,
        plan,
      });
    }
  };

  const handleCheck = (e) => {
    e.target.checked ? changeBillingType(MONTHLY) : changeBillingType(YEARLY);
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        {error && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan?.id}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
              {billingType === "yearly" && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        {/* <S.BillingGroup>
          <S.BillingButton
            type="button"
            onClick={() => changeBillingType(MONTHLY)}
            isSelected={billingType === MONTHLY}
          >
            Monthly
          </S.BillingButton>
          <S.BillingButton
            type="button"
            onClick={() => changeBillingType(YEARLY)}
            isSelected={billingType === YEARLY}
          >
            Yearly
          </S.BillingButton>
        </S.BillingGroup> */}
        <S.BillingArea>
          <S.BillingText isChecked={billingType === MONTHLY}>
            {MONTHLY}
          </S.BillingText>
          <S.BillingLabel>
            <S.InputCheck onChange={handleCheck} type="checkbox" />
            <S.Checkbox>
              <S.CheckButton isChecked={billingType === YEARLY}></S.CheckButton>
            </S.Checkbox>
          </S.BillingLabel>
          <S.BillingText isChecked={billingType === YEARLY}>
            {YEARLY}
          </S.BillingText>
        </S.BillingArea>
      </S.Step2>
    </Step>
  );
};

export default Step2;
