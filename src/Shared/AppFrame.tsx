import { ChangeEvent, KeyboardEvent, useState } from 'react';
import logo from "../Assets/img/Logo_ML.png";
import icSearch from "../Assets/img/ic_Search.png";
import { FormControl, InputGroup, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import BreadcrumbComponent from '../Componets/BreadCrumbComponent';
import { useAppDispachs, useAppSelector } from '../Redux/hooks/hooks';
import { setBreadCrub } from '../Redux/slices/BreadCrumb.slice';
import { useNavigate } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}


export default function AppFrame(props: Props) {

  const breadCrumb = useAppSelector(state => state.Breadcrumb);
  const dispatcher = useAppDispachs();
  const [search, setSearch] = useState<string>("")
  const navigate = useNavigate()

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchQuery()
    }
  }


  const searchQuery = () => {
    if (search.length > 0) {
      navigate(`items?search=${search}`)
    }
  }

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const cleanBreadCrumb = () => {
         dispatcher(setBreadCrub([]))
         navigate("/")
  }
  return (
    <>
      <Navbar expand="lg" className='bck--color1'>
        <Container  >
          <Navbar.Brand className='cp'>
              <img src={logo} alt="ml-logo" onClick={cleanBreadCrumb} />
          </Navbar.Brand>
          <InputGroup className="mb-2">
            <FormControl aria-label="Nunca dejes de buscar" placeholder='Nunca dejes de buscar' onKeyUp={handleKeyUp} onChange={handleChangeSearch} />
            <InputGroup.Text className='cp' onClick={searchQuery}>
              <img src={icSearch} alt="icon" />
            </InputGroup.Text>
          </InputGroup>
        </Container>
      </Navbar>
      <Container>
        <BreadcrumbComponent items={breadCrumb.items} />
        {props.children}
      </Container>
    </>
  );
}