import styled from 'styled-components/macro';

const Container = styled.div`
    display: flex;
    border-bottom: 9px solid #222;
`;

const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;
    color: #fff;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

const Item = styled.div`
    color: #fff;
    margin: auto;
    margin-bottom: 10px;
    max-width: 728px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }

    &::last-of-type {
        margin-bottom: 0;
    }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Body = styled.div`
  font-size: 23px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  font-weight: lighter;

  &.closed {
    max-height: 0;
    padding: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: auto;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export { Container, Inner, Title, Item, Header, Body };