import { Button,  Container, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
      <Container maxW={"container.xl"} h="100vh" p="16">
        <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my='16'>
            <Heading>
                Welcome Back
            </Heading>
            <Input placeholder='Type Email' type='email' required={true} focusBorderColor='purple' />
    
            <Input placeholder='Type Password' type='password' required={true} focusBorderColor='purple' />
     
     <Button variant={'link'} alignSelf={'end'}>
        <Link to={'/forgotPassword'}>Forgot Password</Link>
     </Button>
     <Button colorScheme={'purple'} type='submit'>
       Log In
     </Button>
       <Text textAlign={'right'}>New User ?</Text>

       <Button variant={'link'} colorScheme='purple'>
        <Link to={'/signup'}>Sign Up</Link>
     </Button>


        </VStack>

        </form>

      </Container>
  )
}

export default Login