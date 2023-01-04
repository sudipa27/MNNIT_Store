import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    font-size: 16px;
    color: white;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`;
const Announcements = () => {
  return (
    <Container>
        Free Shipping on orders above 499/-
    </Container>
  )
}

export default Announcements