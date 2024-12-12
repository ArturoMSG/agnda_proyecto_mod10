import React from 'react'
import Head from 'next/head'
import { Box, Flex, Text, Stack, Button, useColorModeValue, useColorMode } from '@chakra-ui/react' //importamos los componentes a usar
import { MoonIcon, SunIcon } from '@chakra-ui/icons'    // Importamos los iconos de la luna y el sol

const BarMenu = () => {
    return (
        <> {/* Este div es el contenedor principal de la página.  si no se pone un div  generara un error*/}
            <Head>
                <title>Agenda</title> {/* Title sirve para poner el texto en la pestaña del explorador.  */}
            </Head>
            <Box>
    
                <Flex
                    bg={useColorModeValue('white', 'gray.600')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderTop={1}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>

                    <Flex flex={{base:1}} justify={{base:'center', md: 'start'}}> 
                        <Text 
                            fontFamily={'heading'} 
                            color={useColorModeValue('gray.800', 'white')}>
                            Agenda
                        </Text>
                    </Flex> 

                    <Stack
                        flex={{base:1, md: 0}}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6} >
                            
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon/> : <SunIcon/>  }
                        </Button>
                        <Button
                            fontSize={'sm'}
                            fontWeight={400}
                            variant={'link'}
                            href={'#'} >
                            Sign In
                        </Button>
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            variant={'link'}
                            href={'#'}
                            bg={'pink.400'}
                            _hover={{ bg: "pink.300" }}>
                            Sign up
                        </Button>
                    </Stack> 
                </Flex>
            </Box>
        </>
    )
}

export default BarMenu