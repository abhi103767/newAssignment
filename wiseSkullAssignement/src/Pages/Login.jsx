import { Box, Text, Input, Button, Container, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLocalData } from '../utils/localStore';
import { getLocalData } from '../utils/localStore';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    function userChecking() {

        axios.get(`http://localhost:8080/users?email=${email}&password=${password}`)
            .then((res) => {
                if (res.data.length === 0) {
                    alert("user does not exist");
                }
                else {

                    navigate('/', { replace: true })
                    setLocalData('email', res.data[0].email);
                }

            })
    }

    return (
        <Container>
            <Heading textAlign={'center'}>Login</Heading>
            <Box mt={'30px'}>
                <Text>Email</Text>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
                <Text>Password</Text>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} name='password' />
                <Button onClick={userChecking} mt={'10px'}>Log In</Button>
            </Box>
        </Container>

    )
}

export default Login