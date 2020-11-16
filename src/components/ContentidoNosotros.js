
/** @jsx jsx */

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    p {
        margin-top: 2rem;
        line-height: 2;
    }

    @media (min-width: 768px) {
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       column-gap: 2rem; 
    }
`

const ContentidoNosotros = () => {

    const informacion = useStaticQuery(graphql`
      query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
          nodes {
            titulo
            descripcion
            imagen {
              fluid( maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)
    
    const {
        titulo,
        descripcion,
        imagen,
    } = informacion.allDatoCmsPagina.nodes[0]
    
    console.log(informacion.allDatoCmsPagina.nodes[0])
    
    return (
      <>
        <h2
          css={css`
            margin-top: 4rem;
            text-align: center;
            font-size: 4rem;
          `}
        >
          {titulo}
        </h2>
        <Contenido>
          <p> {descripcion} </p>
          <Image fluid={imagen.fluid} />
        </Contenido>
      </>
    )
};

export default ContentidoNosotros;