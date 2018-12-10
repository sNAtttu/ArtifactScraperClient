import styled from "styled-components";

const DeckContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: auto;
`;
const DeckObject = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: row1-start;
  grid-row-start: row1-end;
`;

export { DeckContainer, DeckObject };
