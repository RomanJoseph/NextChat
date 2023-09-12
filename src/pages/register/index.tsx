import {Box, Button, Flex, FormControl, Heading, Input, Spacer, Stack, Text,} from '@chakra-ui/react'
import Link from "next/link";

export default function Register(){
    return(
        <FormControl>
            <Flex minWidth='max-content' alignItems='center' justifyContent='center' flexDirection='column' gap='2' height='80vh'>
                <Input placeholder='Seu nome' width='20vw' height='5vh'/>
                <Input placeholder='Seu e-mail' width='20vw' height='5vh'/>
                <Input placeholder='Sua senha' width='20vw' height='5vh'/>
                <Input placeholder='Repita sua senha' width='20vw' height='5vh'/>
                <Button width='20vw' height='5vh' colorScheme='blue'>Register</Button>
                <Box mb={5}/>
                <Link href='/login'>Já tem uma conta ? Clique aqui para fazer login!</Link>
            </Flex>
        </FormControl>
    )
}