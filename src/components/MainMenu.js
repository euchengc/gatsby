import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from 'styled-components';
import SiteInfo from './SiteInfo';


const MainMenuWrapper = styled.div`
  display:flex;
  background-color: rgb(3,27,77);
`
const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`
const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressMenusMenusItems(filter: { name: { eq: "Main Menu" } }) {
          edges {
            node {
              items {
                wordpress_id
                title
                slug
                url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
            <MenuItem to={item.slug ? `/${item.slug}` : `/${item.url}`} key={item.wordpress_id}>
              {item.title}
            </MenuItem>
          ))}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
