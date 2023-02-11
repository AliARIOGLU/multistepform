import styled, { css } from "styled-components";

export const Step2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  height: 170px;
`;

export const RadioLabel = styled.label`
  flex: 1;
  border: 1px solid var(--light-gray);
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 200ms ease;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--alabaster);
      border-color: var(--purplish-blue);
    `}

  &:hover {
    border-color: var(--purplish-blue);
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  margin-bottom: 48px;
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const Subtitle = styled.h6`
  font-size: 14px;
  color: var(--cool-gray);
`;

export const Description = styled.p`
  font-size: 12px;
  color: var(--cool-gray);
`;

export const BillingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BillingButton = styled.button`
  background-color: var(--alabester);
  border: 1px solid var(--light-gray);
  padding: 12px;
  border-radius: 8px;
  color: var(--cool-gray);

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--purplish-blue);
      background-color: var(--alabaster);
      border-color: var(--purplish-blue);
    `}
`;

export const ErrorMessage = styled.p`
  margin-left: auto;
  margin-right: auto;
  color: red;
  font-weight: bold;
`;

export const BillingArea = styled.div`
  width: 100%;
  background-color: var(--alabaster);
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  gap: 20px;
`;

export const InputCheck = styled.input`
  display: none;
`;

export const Checkbox = styled.div`
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: var(--marine-blue);
  border-radius: 40px;
  position: relative;
  cursor: pointer;
`;

export const CheckButton = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 4px;
  left: 5px;
  transition: 500ms left;

  ${({ isChecked }) =>
    isChecked &&
    css`
      left: 25px;
    `}
`;

export const BillingLabel = styled.label``;

export const BillingText = styled.p`
  text-transform: capitalize;
  color: var(--marine-blue);
  font-weight: bold;
  font-size: 14px;

  ${({ isChecked }) =>
    !isChecked &&
    css`
      color: gray;
      opacity: 0.6;
    `}
`;
