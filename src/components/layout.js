import React from "react";
import NavigationBar from "./navbar";
import Container from "react-bootstrap/esm/Container";

function Layout({children}) {
  return(
    <>
      <NavigationBar />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout;