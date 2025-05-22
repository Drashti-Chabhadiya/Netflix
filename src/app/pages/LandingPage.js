import React from "react";
import Header from "../components/common/Header";
import LandingPageContent from "../components/landingPage/LandingPageContent";
import MainBackground from "../components/common/MainBackground";
import Logo from "../components/common/Logo";
import HeaderButton from "../components/common/HeaderButton";
import SignInButton from "../components/common/SignInButton";
import LanguageBtn from "../components/common/LanguageBtn";

const LandingPage = () => {
  return (
    <MainBackground
      color="rgba(0, 0, 0, 0.7)"
      bgImage={"/assets/images/main-image.jpg"}
      height={"600px"}>
      <Header>
        <Logo />
        <HeaderButton>
          <LanguageBtn />
          <SignInButton />
        </HeaderButton>
      </Header>
      <LandingPageContent />
    </MainBackground>
  );
};

export default LandingPage;
