import styled from "styled-components";

export const SummaryGridContainer = styled.div`
  display: grid;
  font-size: 0.75em;
  grid-template-columns: 25% 25% 25% 25%;
  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const SummaryHeaderTitle = styled.div`
  float: left;
`;

export const SummaryValue = styled.div`
  float: left;
`;
