import styled from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
    height: 30px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Items=styled.div`
    color: white;
    display: flex;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    ${mobile({ fontSize: "12px" })}
`
const CategoriesBar = () => {
  return (
    <Container>
        <Items>STATIONARY</Items>
        <Items>SWAGS</Items>
        <Items>SPORTS</Items>
        <Items>FOOD</Items>
        <Items>MISCELLANEOUS</Items>
    </Container>
  )
}

export default CategoriesBar
