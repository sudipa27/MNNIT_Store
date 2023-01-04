import styled from "styled-components"
import { categories } from "../data"
import CategoryItems from "./CategoryItems"
import { mobile } from "../responsive";

const Container=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`
const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItems item={item}/>
        ))}
    </Container>
  )
}

export default Categories
