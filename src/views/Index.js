/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import SimpleFooter from "components/Footers/SimpleFooter";
import Hero from "components/Hero/Hero";
import DemoNavbar from "components/Navbars/DemoNavbar";
import ThreeCards from "components/ThreeCards/ThreeCards";
import React from "react";


class Index extends React.Component {

  render() {
    return ( 
    <>
      <DemoNavbar/>
      <Hero/>
      <ThreeCards/>
      <SimpleFooter/>
    </>
    );
  }
}

export default Index;
