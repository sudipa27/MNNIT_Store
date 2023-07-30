import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import StationeryProducts from "../components/StationeryProducts";
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

const Stationery = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <CategoriesBar/>
      <Title>STATIONERY</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            <Option>Art and Craft</Option>
            <Option>Geometry</Option>
            <Option>Other</Option>
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
      <StationeryProducts />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Stationery;
