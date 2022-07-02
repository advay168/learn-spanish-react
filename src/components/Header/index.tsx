import React from "react";

// Components
import NavBar from "../NavBar";

// Styles
import { Wrapper, ImgWrapper, Img } from "./styles";

// Assets
import Logo from "../../images/Logo.svg";

export default function Header() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={Logo} width="300" height="150" alt="Logo" />
      </ImgWrapper>
      <NavBar />
    </Wrapper>
  );
}
