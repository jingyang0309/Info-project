import { styled } from "styled-components";

const StyleInfoCard = styled.div`
  width: 90%;
  background-color: #d7cba65c;
  margin: 0 auto;
  padding: 30px 0 ;
  margin-top: 20px;
  border-radius: 6px;
  /* box-shadow: 0px 2px 6px -4px rgba(0, 0, 0, 0.6); */
  box-shadow: 0 8px 10px  rgba(17,17,26,0.1), 0 16px 56px  rgba(17,17,26,0.1), 0 24px 80px  rgba(172, 172, 175, 0.1), 0 0 0  currentColor, 0 0 0  currentColor;
  p {
    text-align: center;
    font-size: 14px;
  }
  & > .avatar-container {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > .name {
    padding: 20px 0;
    border-bottom: 4px solid ${({theme})=>theme.primaryColor};
    width: 90px;
    margin: 0 auto 30px;
    p {
      font-size: 18px;
      letter-spacing: 0.6px;
    }
  }
  & > .button-group{
    padding: 0 60px;
    display:flex;
    justify-content: space-between;
    div{
      padding: 8px 30px;
      background-color: ${({theme})=>theme.primaryColor};
      border-radius: 4px;
      font-size: 14px;
      color: ${({theme})=>theme.secondaryTextColor};
    }
  }
`;
export default StyleInfoCard;
