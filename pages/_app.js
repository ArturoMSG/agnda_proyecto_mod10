import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
  
      <>
   <ChakraProvider>
      <h2>funcionando _app</h2>
      <Component {...pageProps}/> 
    </ChakraProvider>
                
    </>
)  
}
