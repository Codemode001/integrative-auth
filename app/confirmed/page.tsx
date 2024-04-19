"use client";
import React from "react";
import styled from "styled-components";
import navigateTo from "../utils/navigate";

const ConfirmationContainer = styled.div`
  background-color: #15a9ff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmationCard = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

const ConfirmationHeading = styled.h1`
  color: #15a9ff;
  margin-bottom: 20px;
`;

const ConfirmationText = styled.p`
  color: #333;
  margin-bottom: 20px;
`;

const ConfirmationButton = styled.button`
  background-color: #15a9ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const EmailConfirmed = () => {
  return (
    <ConfirmationContainer>
      <ConfirmationCard>
        <ConfirmationHeading>Email Confirmed!</ConfirmationHeading>
        <ConfirmationText>
          Your email address has been successfully confirmed.
        </ConfirmationText>
        <ConfirmationButton onClick={navigateTo("/")}>
          Login Now
        </ConfirmationButton>
      </ConfirmationCard>
    </ConfirmationContainer>
  );
};

export default EmailConfirmed;
