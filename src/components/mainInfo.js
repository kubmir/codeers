import * as React from "react"
import styled from "styled-components"

import "./layout.css"

const MainHeading = styled.h1`
  font-size: 46px;
  font-weight: 400;
`

const MainDescription = styled.p`
  font-weight: 400;
`
const StartCooperationButton = styled.button``

const MainInfo = () => {
  return (
    <>
      <MainHeading>
        Mobilní aplikace.
        <br />
        Velké věci na malém prostoru.
      </MainHeading>
      <MainDescription>
        Jsme vývojářská a poradenská firma. Specializujeme se na integraci
        nativních mobilních aplikací do Vašeho podnikání.
      </MainDescription>
      <StartCooperationButton>Začít Spolupráci</StartCooperationButton>
    </>
  )
}

export default MainInfo
