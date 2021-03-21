import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Button, Card, Container } from 'react-bootstrap';

function Chefs() {
    return (
        <div>
        <Navbar />
        <div>
            <div className="text-center">
                NFT- <br />
                For original kind of recipe pages
                <br />
                <Button variant="info">How to mint an NFT for your recipe</Button>
            </div>
            <div>
                <Container>
                    <Card body className="recipecard bg-secondary">This is some text within a card body.</Card>
                </Container>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Chefs