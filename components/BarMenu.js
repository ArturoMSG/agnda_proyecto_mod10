import React from 'react'
import Head from 'next/head'

const BarMenu = () => {
    return (
        <> {/* Este div es el contenedor principal de la página.  si no se pone un div  generara un error*/}
            <Head>
                <title>Agenda</title> {/* Title sirve para poner el texto en la pestaña del explorador.  */}
            </Head>
            <div>BarMenu</div>
        </>
    )
}

export default BarMenu