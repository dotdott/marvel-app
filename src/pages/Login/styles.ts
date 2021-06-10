import styled from "styled-components";

export const LoginContainer = styled.div`
  position: relative;
  right: 35rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  color: #84848d;
  width: 20rem;

  @media screen and (max-width: 768px) {
    position: unset;
  }
`;
export const Title = styled.p`
  margin-left: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UsernameInput = styled.input`
  padding: 1.1rem;
  border-radius: 999px;
  border: none;
  outline: none;
`;
export const PasswordInput = styled(UsernameInput)``;

export const SaveLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SaveLoginLabel = styled.label`
  margin-left: 1rem;
`;
export const SaveLoginCheckbox = styled.input`
  margin-right: 5px;
  border-radius: 2px;

  &::after {
    content: "";
    width: 11px;
    height: 11px;
    border: 1px solid #ff0000;
    border-radius: 3px;
    display: inline-block;
  }
`;
export const ForgetPassword = styled.a`
  position: relative;
  width: auto;

  color: #84848d;
  text-decoration: none;

  &::after {
    position: absolute;
    bottom: -4px;
    left: 2px;
    width: 110%;
    height: 1px;
    background-color: #ff0000;
    content: "";
  }
`;

export const LoginButton = styled.button`
  font-size: 1rem;
  padding: 1rem;

  color: #fff;
  background: #ff0000;

  border-radius: 999px;
  border: none;
  cursor: pointer;
`;

export const SubscribeInviteText = styled.p`
  margin-left: 2rem;

  & a {
    color: #ff0000;
    text-decoration: none;
  }
`;

export const SloganWrapper = styled.div`
  position: relative;
  left: -35rem;
  top: 32%;
  height: 100vh;
  z-index: 2;
`;

export const ErrorText = styled.p`
  margin-left: 1rem;
  color: #ff0000;
`;

export const LoadingState = styled.div`
  position: fixed;
  top: 50%;
  width: 100%;
`;
