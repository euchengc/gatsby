import React from "react"
import { graphql, StaticQuery} from "gatsby"
import styled from 'styled-components'

const LogoImage = styled.img`
    width: 50px;
    margin-right: 40px;
    float:left;
`

const Logo = () => (
    <StaticQuery 
    query ={graphql`
    {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `} render ={props=> (
        <div>
            <LogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" /> 
        </div>
    )} />
)

export default Logo;