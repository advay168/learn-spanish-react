import React, { useState } from "react";

// Components
import TestQuestion from "../TestQuestion";
import TestConjugation from "../TestConjugation";

//Styles
import { Container } from "./styles";

export default function Test() {
  const [askMeaning, setAskMeaning] = useState(true);
  const [chosen, setChosen] = useState(false);
  if (!chosen) {
    return (
      <Container>
        <button
          onClick={() => {
            setChosen(true);
            setAskMeaning(false);
          }}
        >
          Conjugation
        </button>
        <button
          onClick={() => {
            setChosen(true);
            setAskMeaning(true);
          }}
        >
          Meanings
        </button>
      </Container>
    );
  }
  if (askMeaning) {
    return <TestQuestion />;
  } else {
    return <TestConjugation />;
  }
}
