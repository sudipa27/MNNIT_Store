import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import SportsProducts from "../components/SportsProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CategoriesBar from "../components/CategoriesBar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(203, 196, 197);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}  
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}  
`;
const Option = styled.option``;

const Sports = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <CategoriesBar/>
      <Title>SPORTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            <Option>Cricket</Option>
            <Option>Badminton</Option>
            <Option>Basketball</Option>
            <Option>Football</Option>
            <Option>Table-Tennis</Option>
            <Option>Boxing</Option>
            <Option>Weight-Lifting</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <SportsProducts />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Sports;
