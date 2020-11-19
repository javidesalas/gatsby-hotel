/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Navegacion from './Nav'

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({title}) => {
    return (
      <footer
        css={css`
          background-color: #222;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
            <Navegacion />
          <EnlaceHome to="/">
            <h3>
              {title}
            </h3>
          </EnlaceHome>

        </div>
      </footer>
    )
};

export default Footer;