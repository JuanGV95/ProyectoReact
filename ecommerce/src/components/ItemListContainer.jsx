import Container from 'react-bootstrap/Container';

export const ItemListContainter = (props) => {
    return <Container className='greeting'><h1>{props.greeting}</h1></Container>
};