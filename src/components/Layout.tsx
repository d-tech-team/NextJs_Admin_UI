import { Col, Container, Row } from "react-bootstrap";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xl={2} sm={3} className="pe-0 ps-0">
                        <Sidebar />
                    </Col>
                    <Col xl={10} sm={9} className="ps-0">
                        <Header />
                        {children}
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}