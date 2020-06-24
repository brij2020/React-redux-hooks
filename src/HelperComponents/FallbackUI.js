import React from 'react'
import LoadingOverlay from 'react-loading-overlay'
import FadeLoader from 'react-spinners/FadeLoader'
import { css } from "@emotion/core";

const FallBackUI = (props) => {
  const override = css`
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  left: calc(50vw - 25px);
  top: calc(50vh - 20px);
  z-index: 1500;
  background-color: #fff;
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
   animation: sk-stretchdelay 1.2s infinite ease-in-out;
`;
  return(
    <LoadingOverlay

      active={props.isLoading}
      spinner={
      <FadeLoader
          css={override}
          size={150}
          color={"#f30"}

        />}
    />

  )
}

export default FallBackUI;
