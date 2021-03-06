import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export {Container, Column, Row, Link, Title, Text, Break}
