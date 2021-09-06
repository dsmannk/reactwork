import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const StyledHeaderDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledHeadLink = styled(Link)`
  color: orange;
`;

const Header = () => {
  return (
    <div>
      <StyledHeaderDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeaderDiv>
      <Navbar bg="primary" variant="dark">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/login/:id" className="nav-link">
            로그인
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
