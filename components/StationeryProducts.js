import styled from "styled-components";
import { stationeryProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StationeryProducts = () => {
  return (
    <Container>
      {stationeryProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default StationeryProducts;