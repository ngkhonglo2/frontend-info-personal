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
import {HiLockClosed} from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { loginUser } from '../../redux/authRequest'; 

const Login = () => {
    const [messenger, setMessenger] = useState('')
    const dispatch = useDispatch()
    const navigation = useNavigate()
    return (
        <ContainterLogin>
            <Wrapper height="440px">
                <FormBox>
                    <Title>Login</Title>
                    <FormikAuth 
                        initialValues={{
                            userName: '',
                            password: '',
                        }}
                        onSubmit={async (values, { resetForm }) => {
                            loginUser(values, dispatch, navigation, setMessenger)
                            resetForm()
                          }}>
                        <FormAuth>
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
                            <BtnSubmit type='submit'>Login</BtnSubmit>
                            <LoginRegister>
                                <RegisterLink>Don't have an account? <Link to={'/register'}>Register</Link></RegisterLink>
                            </LoginRegister>
                        </FormAuth>
                    </FormikAuth>
                </FormBox>
            </Wrapper>
        </ContainterLogin>
    );
};

export default Login;