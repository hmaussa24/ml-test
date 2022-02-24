import * as React from 'react';
import logo from "../Assets/img/Logo_ML.png";
import icSearch from "../Assets/img/ic_Search.png";
import { FormControl, InputGroup, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import BreadcrumbComponent from '../Componets/BreadCrumbComponent';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}


export default function AppFrame(props: Props) {
  return (
    <>
      <Navbar expand="lg" className='bck--color1'>
        <Container  >
          <Navbar.Brand href="#">
            <img src={logo} alt="ml-logo" />
          </Navbar.Brand>
          <InputGroup className="mb-2">
            <FormControl aria-label="Nunca dejes de buscar" placeholder='Nunca dejes de buscar' />
            <InputGroup.Text>
              <img src={icSearch} />
            </InputGroup.Text>
          </InputGroup>
        </Container>
      </Navbar>
      <Container>
        <BreadcrumbComponent items={["item1", "item2", "item3"]}/>
        {props.children}
      </Container>
    </>
  );
}