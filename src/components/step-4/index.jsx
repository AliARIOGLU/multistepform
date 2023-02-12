import React, { useState } from "react";
import Step from "../step";

import * as S from "./styled";

function Step4({ formData, ...props }) {
  const { billingType, plan } = formData.step2;
  const { selectedAddons } = formData.step3;

  const [updatedBillingType, setUpdatedBillingType] = useState(billingType);
  const [updatedAddons, setUpdatedAddons] = useState(selectedAddons);
  const [updatedPlan, setUpdatedPlan] = useState(plan);

  const handleChange = () => {
    setUpdatedBillingType(
      updatedBillingType === "yearly" ? "monthly" : "yearly"
    );

    setUpdatedAddons(
      updatedAddons.map((item) =>
        updatedBillingType === "monthly"
          ? {
              ...item,
              price: `+${item.priceAmount * 10}/yr`,
              priceAmount: item.priceAmount * 10,
            }
          : {
              ...item,
              price: `+${item.priceAmount / 10}/mo`,
              priceAmount: item.priceAmount / 10,
            }
      )
    );

    const currPrice =
      plan.priceAmount > 10
        ? Number(plan.price.slice(1, 3))
        : Number(plan.price.slice(1, 2));
    const currAmount =
      plan.priceAmount > 10
        ? Number(String(plan.priceAmount).slice(0, 2))
        : Number(String(plan.priceAmount).slice(0, 1));

    setUpdatedPlan({
      ...updatedPlan,
      price:
        updatedBillingType === "yearly"
          ? `$${currPrice}/mo`
          : `$${currPrice * 10}/yr`,
      priceAmount:
        updatedBillingType === "yearly" ? currAmount : currAmount * 10,
    });
  };

  console.log(updatedPlan);

  return (
    <Step {...props}>
      <S.Step4>
        <S.MainRow>
          <S.Title>
            {plan.title} ({updatedBillingType})
            <S.ChangeBill onClick={handleChange}>Change</S.ChangeBill>
          </S.Title>
          <S.Price>{updatedPlan.price}</S.Price>
        </S.MainRow>
        {updatedAddons.length > 0 &&
          updatedAddons.map((item) => (
            <S.SubRow key={item.id}>
              <S.Title>{item.title}</S.Title>
              <S.Price>{item.price}</S.Price>
            </S.SubRow>
          ))}
        <S.TotalRow>
          <S.Title>Total (per {updatedBillingType})</S.Title>
          <S.TotalAmount>
            +$
            {updatedAddons.reduce(
              (acc, curr) => acc + curr.priceAmount,
              updatedPlan.priceAmount
            )}
            /{updatedBillingType === "monthly" ? "mo" : "yr"}
          </S.TotalAmount>
        </S.TotalRow>
      </S.Step4>
    </Step>
  );
}

export default Step4;
