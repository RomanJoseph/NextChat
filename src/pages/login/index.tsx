'use client'

import { Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import Link from "next/link";
import {useState} from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <FormControl>
            <Flex minWidth='max-content' alignItems='center' justifyContent='center' flexDirection='column' gap='2' height='80vh'>
                <Input placeholder='E-Mail' width='20vw' height='5vh' onChange={(event) => {setEmail(event.target.value)}}/>
                <Input placeholder='Senha' width='20vw' height='5vh'  onChange={(event) => setPassword(event.target.value)}/>
                <Button width='20vw' height='5vh' colorScheme='blue'>Login</Button>
                <Box mb={5}/>
                <Link href='/register'>Não tem uma conta ? Clique para criar!</Link>
            </Flex>
        </FormControl>
    )
}