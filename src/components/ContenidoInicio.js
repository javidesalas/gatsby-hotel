/** @jsx jsx */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const TextoInicio = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;;
    }

    p {
        line-height: 2;
    }
`

const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
      query {
        allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
          nodes {
            titulo
            descripcion
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)

    //console.log(informacion.allDatoCmsPagina.nodes[0])

    const { titulo, descripcion, imagen } = informacion.allDatoCmsPagina.nodes[0]

    return (
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{titulo}</h2>

            <TextoInicio>
                <p>
                    {descripcion}
                </p>
                <Image fluid={imagen.fluid} />
            </TextoInicio>
        
       </>
        
    );
};

export default ContenidoInicio;