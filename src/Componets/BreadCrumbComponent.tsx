import { Breadcrumb } from 'react-bootstrap';
import { BreadCrumInterface } from '../Shared/Models/BreadCrumbInterface';
const BreadcrumbComponent = (props: BreadCrumInterface) => {
   const {items} = props
    return(
        <Breadcrumb className='mg--top-16 text--size-14 tetx-color-4 text-none'>
           {items.map((item) => (<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)) }
        </Breadcrumb>
    )
}


export default BreadcrumbComponent;