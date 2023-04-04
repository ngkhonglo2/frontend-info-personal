import React, { useState } from 'react';
import {
    ContainterLogin, 
    Wrapper, 
    FormBox, 
    Title, 
    FormikAuth, 
    FormAuth, 
    InputBox,
    FieldAuth,
    Label,
    IconBox,
    BtnSubmit,
    LoginRegister,
    RegisterLink,
    Messenger
} from '../Style';
import {FaUserAlt} from 'react-icons/fa';
import {IoMail} from 'react-icons/io5';
import {HiLockClosed} from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/authRequest';

const Register = () => {
    const [messenger, setMessenger] = useState('')
    const dispatch = useDispatch()
    const navigation = useNavigate()
    return (
        <ContainterLogin>
            <Wrapper height="500px">
                <FormBox>
                    <Title>Register</Title>
                    <FormikAuth 
                        initialValues={{
                            email: '',
                            userName: '',
                            password: '',
                        }}
                        onSubmit={async (values, {resetForm}) => {
                            registerUser(values, dispatch, navigation, setMessenger)
                            resetForm()
                          }}>
                        <FormAuth>
                            <InputBox>
                                <IconBox>
                                    <IoMail/>
                                </IconBox>
                                <FieldAuth id="email" type="email" name="email" required />
                                <Label htmlFor="email">Email</Label>
                            </InputBox>
                            <InputBox>
                                <IconBox>
                                    <FaUserAlt/>
                                </IconBox>
                                <FieldAuth id="userName" type="text" name="userName" required />
                                <Label htmlFor="userName">Name</Label>
                            </InputBox>
                            <InputBox>
                                <IconBox>
                                    <HiLockClosed/>
                                </IconBox>
                                <FieldAuth id="password" type="password" name="password" required />
                                <Label htmlFor="password">Password</Label>
                            </InputBox>
                            <Messenger>
                                {messenger}
                            </Messenger>
                            <BtnSubmit type='submit'>Register</BtnSubmit>
                            <LoginRegister>
                                <RegisterLink>Alrealy have an account? <Link to={'/'}>Login</Link></RegisterLink>
                            </LoginRegister>
                        </FormAuth>
                    </FormikAuth>
                </FormBox>
            </Wrapper>
        </ContainterLogin>
    );
};

export default Register;