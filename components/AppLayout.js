import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

const AppLayout = ({ children }) => {
  return (
    <div>
      <HeaderWrapper>
        <Link href="/">
          <LogoWrapper>
            <img src="../static/img/logo.png"></img>
          </LogoWrapper>
        </Link>
        <PageWrapper>
          <Link href="/board">
            <Page>BOARD</Page>
          </Link>
          <Link href="/login">
            <Page>LOGIN</Page>
          </Link>
          <Page>
            <BiSearchAlt2 />
          </Page>
        </PageWrapper>
      </HeaderWrapper>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px 0px;
  background-color: #f9f9f9;
`;
const LogoWrapper = styled.a`
  margin-left: 10%;
`;
const PageWrapper = styled.nav`
  margin-left: auto;
  margin-right: 10%;
`;
const Page = styled.a`
  margin-right: 30px;
  font-weight: 500;
  color: black;
`;
