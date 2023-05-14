import { Col, Container, Row } from "react-bootstrap";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={10}>
                        <Header />
                        {children}
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}