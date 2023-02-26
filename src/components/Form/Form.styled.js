import styled from "styled-components";

export const FormContainer = styled.form`
width: 70%;
padding: 15px, 10px;
border: 1px solid black;
display: flex;
flex-direction: column;
gap: 20px;`;

export const FormLabel = styled.label`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-bottom: 10px;`;

export const FormInput = styled.input`
width: 30%;`



export const FormButton = styled.button`
display: block;
margin-right: auto;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 4px;
width: fit-content;
background-color: mediumseagreen`;