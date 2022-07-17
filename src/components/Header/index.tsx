import React from "react";

// Components
import NavBar from "../NavBar";

// Styles
import { Wrapper, ImgWrapper, Img } from "./styles";

// Assets
import {ReactComponent  as Logo} from "../../images/Logo.svg";

export default function Header() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Logo />
      </ImgWrapper>
      <NavBar />
    </Wrapper>
  );
}
