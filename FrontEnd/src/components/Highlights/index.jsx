import React, { useEffect } from 'react'

import {
    IoMdArrowDroprightCircle,
    IoMdArrowDropleftCircle
} from 'react-icons/io'

import LogoDNw from '/dominio-nerd-logo-w.svg'
import MiniBotton from '/mini-wonderwoman.svg'
import MiniTop from '/mini-thor.svg'

import * as C from './styles'
import { useState } from 'react'

const Highlights = () => {

    const [responsiveWidth, setResponsiveWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => setResponsiveWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <C.Main>
            <C.Mini
                src={MiniBotton}
                alt='Miniatura da Mulher Maravilha'
                style={{
                    bottom:-10,
                    right:375
                }}
            />
            <C.Mini
                src={MiniTop}
                alt='Miniatura do Thor'
                style={{
                    right:10,
                    top:-40
                }}
            />
            <C.Container>
                <C.TextField>
                    <C.Logo 
                        src={LogoDNw}
                        alt='Logo Dominio Nerd'
                    />
                    <h2 style={{marginBottom:'1rem'}}>Venha jogar Heroclix!</h2>
                    <p style={{marginBottom:'2rem'}}>Nesse jogo, acontece e então as coisas serão jogadas com regras e detalhes para  melhor quando então foi assim que se fez e com isso o melhor de tudo que pode e vença desafios.</p>
                    <button>Saiba mais</button>
                </C.TextField>
            </C.Container>
            {responsiveWidth > 840 &&
            <C.Container>
                <C.SlideButton 
                    style={{
                        left:10
                }}>
                    <IoMdArrowDropleftCircle/>
                </C.SlideButton>
                <C.SlideField>
                    <C.SlideBox style={{background: 'black'}}>

                    </C.SlideBox>
                    <C.SlideBox style={{background: 'blue'}}>
                        
                    </C.SlideBox>
                    <C.SlideBox style={{background: 'yellow'}}>
                        
                    </C.SlideBox>
                </C.SlideField>
                <C.SlideButton 
                    style={{
                        right:10
                }}>
                    <IoMdArrowDroprightCircle/>
                </C.SlideButton>
            </C.Container>}
           
        </C.Main>
    )
}

export default Highlights