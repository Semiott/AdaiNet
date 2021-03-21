import React from 'react';
import { Nav } from 'react-bootstrap';


function Footer() {
    return (
        <div>
            <hr className="border border-5"/>
            <Nav justify defaultActiveKey="/home" className="text-secondary">
                <Nav.Item>
                    <Nav.Link href="/home" className="text-secondary">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="text-secondary">Food Communities</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-secondary">Food Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="text-dark"><b>Recipe NFT</b></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" className="text-secondary">Helpdesk</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" className="text-secondary">Dispute Resolution</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" className="text-secondary">Resources</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr />
            <div className="text-center">
                <div className="socialmedia">
                    Find us on SocialMedia
                     <i class="bi bi-facebook"></i>
                     <i class="bi bi-instagram"></i>
                     <i class="bi bi-twitter"></i>
                     <i class="bi bi-whatsapp"></i>
                </div>
                <br />
                &copy; RECIPE NFT
            </div>
        </div>
    )
}

export default Footer
