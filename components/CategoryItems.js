import styled from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`
const Info=styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
`
const Title=styled.h1`
    color: white;
    font-weight: bolder;
    margin-bottom: 20px;
`
const Button=styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const CategoryItems = ({item}) => {
  return (
    <Container>
            <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItems
