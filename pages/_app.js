import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return ( 
  
    <>
      {/* los parentesis () envolviendo lo que esta dentro del return, es importante para que se desplegue la informacion, si no se pone y se pone el chakraprovider no aparecera nada en la pantalla*/} 
      <ChakraProvider>
        <Component {...pageProps}/> 
      </ChakraProvider>
                
    </>
  )  
}
