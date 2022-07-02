import React from "react";

// Components
import NavBar from "../NavBar";

// Styles
import { Wrapper, ImgWrapper, Img } from "./styles";

// Assets
import {Logo as LogoComponent} from "../../images/Logo.svg";

export default function Header() {
  return (
    <Wrapper>
      <ImgWrapper>
        <LogoComponent />
      </ImgWrapper>
      <NavBar />
    </Wrapper>
  );
}
