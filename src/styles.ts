import styled from "@emotion/styled";

export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: "Font Bold";
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #4a392a;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 70px;
    margin-top: 20px;
  }
`;

export const TextBlock = styled.p`
  text-align: center;
  margin: 0 0 15px;

  span {
    font-family: "Font Bold";
    font-size: 12px;
    text-transform: uppercase;
    color: #4a392a;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin: 0 0 10px;
      display: flex;
      flex-direction: column;

      text {
        font-size: 14px;
        color: #9d9d9d;
      }

      strong {
        color: #772605;
      }
    }
  }
`;

export const TextLink = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  color: #772605;
  text-decoration: none;
  border-bottom: 1px dotted #cfbeb7;
  line-height: 18px;
`;
