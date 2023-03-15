import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const CategoryContainer = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;

img {
  width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    width: 50%;
  }
}
`;

const Categories = () => {
  return (
    <Container>
       
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
     
    </Container>
    
  );
};

export default Categories;
