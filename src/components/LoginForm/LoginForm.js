import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { Red } from '../../Styles/utilities';

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 3px solid red;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  padding: 1rem 0.75rem;
  background-color: #fff;
  border-radius: 15px;
  height: 100%;
  width: 50%;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  @media screen and (max-width: 600px) {
    height: 90%;
    width: 90%;
    margin-top: 6rem;
  }
`;

export const FormContent = styled.div`
  padding: 10px 20px;
  border-radius: 15px 15px;
  background-color: #fff;
  height: 50%;
`;

export const Title = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
  ${({ showError }) => (showError ? `color: red;` : null)}
`;

export const Input = styled(Field)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem 0.5rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Submit = styled.button`
  font-weight: 700;
  font-family: 'Julee', cursive;
  font-size: 16px;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : '10px')};
  color: white;
  height: 20px;
  border-radius: 4px;
  padding: 20px;
  width: ${({ w }) => (w ? `${w}` : '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${Red};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #ccc !important;
      color: #fff;
      border: 1px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ToggleTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
`;

export const GoogleButton = styled(Submit)`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
  font-family: 'Julee', cursive;
`;

export const GoogleIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Alink = styled.a`
  color: ${Red};
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
