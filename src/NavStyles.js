import {Link,useLocation} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
display: flex;
justify-content: center;
padding: 20px;
width : 20%;
margin : auto;
`;


 export const NavbarLink = styled(Link)`
 text-decoration: none;
 color: white;
 font-size: 20px;
 background-color : black;
 padding: 8px;
 border-radius : 6px;
 margin-right : 40px;
 border-bottom: ${props => props.active ? '3px solid white' : 'none'};
&:hover,
&:focus{
    color: white;
}
&:active{
    color : white;
}`;


export const CustomNavLink = ({ to, label }) => {
    const location = useLocation();
    return (
      <NavbarLink to={to} active={location.pathname === to}>
        {label}
      </NavbarLink>
    );
  };