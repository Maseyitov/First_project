import React from "react";
import styled from "styled-components";

const Hamburger = styled.div`
  position: absolute;
  top: 15px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

const Line1 = styled.div`
  width: 245px;
  height: 4px;
  background-color: #1a237e;
  border-radius: 2px;
`;

const Line2 = styled.div`
  width: 195px;
  height: 4px;
  background-color: #f3f9f8;
  border-radius: 2px;
  margin-left: 50px;
`;

const Line3 = styled.div`
  width: 160px;
  height: 4px;
  background-color: #1a237e;
  border-radius: 2px;
  margin-left: 85px;
`;

function Lines() {
  return (
    <Hamburger>
      <Line1 />
      <Line2 />
      <Line3 />
    </Hamburger>
  );
}

export default Lines;