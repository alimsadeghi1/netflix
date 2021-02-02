import styled from 'styled-components/macro'

const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  
  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

const Container = styled.section`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

const Pane = styled.div`
  width: 50%;
  
  @media (max-width: 1000px){
    width: 100%;
    padding: 0 44px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 12px;
  line-height: 1.1;

  @media (max-width: 600px){
    font-size: 24px;
  }
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  line-height: 1.4;


  @media (max-width: 600px){
    font-size: 16px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export { Item, Inner, Container, Pane, Title, SubTitle, Image }