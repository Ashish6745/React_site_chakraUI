import React from 'react'
import { Link } from 'react-router-dom'
import { Button,  Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'

function Sign() {
  return (
    <Container maxW={"container.xl"} h="100vh" p="16" my='16'>
        <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my='8'>
            <Heading>
                Video Hub
            </Heading>
            <Avatar alignSelf={'center'} boxSize={'16'}/>
            <Input placeholder='Type Name' type='name' required={true} focusBorderColor='purple' />

            <Input placeholder='Type Email' type='email' required={true} focusBorderColor='purple' />
    
            <Input placeholder='Type Password' type='password' required={true} focusBorderColor='purple' />
     
    
     <Button colorScheme={'purple'} type='submit'>
       Sign Up
     </Button>
       <Text textAlign={'right'}>Already Signed Up</Text>

       <Button variant={'link'} colorScheme='purple'>
        <Link to={'/signup'}>Login In</Link>
     </Button>


        </VStack>

        </form>

      </Container>
  )
}

export default Sign