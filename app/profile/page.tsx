"use client";
import React from "react";
import styled from "styled-components";
import { createClient } from "../utils/supabase/client";

const supabase = createClient();

const ProfilePage = () => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = "/";
      alert("User Signed Out!");
    } else {
      alert(error.message);
    }
  }

  return (
    <PageContainer>
      <ProfileCard>
        <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
        <Name>Your Name</Name>
        <Email>your.email@example.com</Email>
        <EditProfileButton>Edit Profile</EditProfileButton>
        <LogoutButton onClick={signOut}>Logout</LogoutButton>
      </ProfileCard>
    </PageContainer>
  );
};

export default ProfilePage;

const PageContainer = styled.div`
  background: linear-gradient(135deg, #15a9ff, #ff69b4);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  color: #15a9ff;
  margin-bottom: 10px;
`;

const Email = styled.p`
  color: #333;
  margin-bottom: 20px;
`;

const EditProfileButton = styled.button`
  background-color: #15a9ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LogoutButton = styled.button`
  background-color: #ff6961;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
