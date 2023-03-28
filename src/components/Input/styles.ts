import styled from "styled-components";

export const InputArea = styled.section<{theme: string}>`
    display: flex;
    width: 1254px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0px;
    transition: all ease 0.2s;

    input {
        height: 50px;
        width: 450px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        padding: 0px 10px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0;
        font-size: 14px;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '' : '#FFF'};


        ::placeholder {
            color: #ccc
        }
    }

    button{
        height: 50px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(44, 58, 70)'};
        color: ${props => props.theme === 'light' ? '' : '#FFF'};
        font-size: 14px;
    }

    select {
        -webkit-appearance: none;
        appearance: none;
    }


    select {
        height: 50px;
        width: 160px;
        border-radius: 2px;
        padding: 0px 20px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
        outline: 0; 
        font-size: 14px;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
    }

    .sel span{
        color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
        margin-left: -20px;
        margin-top: 17px;
        position: absolute;
    }

    @media(max-width: 1024px) {
        & {
            width: auto;
            padding: 20px;
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            input {
                width: 80%
            }
            select {
                margin-top: 10px;
                height: 50px;
                width: 150px;
            }
        }
    }
`