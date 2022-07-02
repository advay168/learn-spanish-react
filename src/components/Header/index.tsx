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
        <Img src={Logo} alt="Logo" />
      </ImgWrapper>
      <NavBar />
    </Wrapper>
  );
}
