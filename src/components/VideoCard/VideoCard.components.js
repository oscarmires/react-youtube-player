import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.theme.boxBackgroundColor};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 1px 1px 5px ${(props) => props.theme.shadowColor};
  margin: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.boxOnHover};
    cursor: pointer;
  }
`;

export const InfoArea = styled.div`
  padding: 15px;
  width: 100%;

  & h2 {
    margin: 5px 0;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 170px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardsGrid = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
