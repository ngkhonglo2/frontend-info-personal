import styled from "styled-components";
import {Formik, Form, Field} from 'formik'

export const ContainterLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: url('https://phunugioi.com/wp-content/uploads/2020/02/hinh-anh-dep-thien-nhien.jpg') no-repeat;
    background-size: cover;
    background-position: center;
`

export const Wrapper = styled.div`
    position: relative;
    width: 400px;
    height: ${props => (props.height)};
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media (max-width: 576px) {
        margin: auto 15px;
    }
`

export const FormBox = styled.div`
    width: 100%;
    padding: 40px;
`

export const Title = styled.h2`
    color: #162938;
    font-size: 2em;
    text-align: center;
`

export const FormikAuth = styled(Formik)``

export const FormAuth = styled(Form)``

export const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;
`

export const FieldAuth = styled(Field)`
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600;
    padding: 0 35px 0 5px;
    &:focus~label, &:valid~label {
        top: 0;
    };
`

export const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    transition: 0.5s;
    font-size: 1em;
    color: #162938;
    font-weight: 500;
    pointer-events: none;
`

export const IconBox = styled.span`
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    line-height: 57px;
`

export const BtnSubmit = styled.button`
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
`

export const LoginRegister = styled.div`
    font-size: .9em;
    color: #162938;
    font-weight: 500;
    text-align: center;
    margin: 25px 0 10px;
`

export const RegisterLink = styled.p`
`

export const Messenger = styled.p`
    color: red;
    margin-bottom: 20px;
    font-size: 12px;
`