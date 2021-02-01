import styled from 'styled-components/macro'

const Inner = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  
  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

const Container = styled.section``;

const Pane = styled.div``;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Image = styled.img``;

export { Inner, Container, Pane, Title, SubTitle, Image }