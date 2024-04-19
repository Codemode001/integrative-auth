"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createClient } from "../utils/supabase/client";

const supabase = createClient();

const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState<any>();
  const [userName, setUserName] = useState<any>();

  const fetchUserEmail = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (data && !error) {
        setUserEmail(data.session?.user.email);
        console.log(userEmail);
      }
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  const fetchUserName = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (data && !error) {
        setUserName(data.session?.user.user_metadata.displayName);
        console.log(userName);
      }
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.href = "/";
      alert("User Signed Out!");
    } else {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchUserEmail();
    fetchUserName();
  });

  return (
    <PageContainer>
      <ProfileCard>
        <ProfileImage
          src="https://m.media-amazon.com/images/M/MV5BMTI5ODY5NTUzMF5BMl5BanBnXkFtZTcwOTAzNTIzMw@@._V1_.jpg"
          alt="Profile"
        />
        <Name>{userName ? userName : "ngalan"}</Name>
        <Email>{userEmail ? userEmail : "email"}</Email>
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
  min-width: 20rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
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
