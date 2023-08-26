import React from 'react';
import './Buttons.css';
import { Button } from 'reactstrap';
import Navbar from '../Navbar/Navbar';

export default function Buttons() {
    return (
        <div>
            <Navbar />

            <div className="Buttonsgrid">
                <h2>Buttons</h2>
                <div>
                    <Button color="primary">primary</Button>
                </div>
                <div>
                    <Button>secondary</Button>
                </div>
                <div>
                    <Button color="success">success</Button>
                </div>
                <div>
                    <Button color="info">info</Button>
                </div>
                <div>
                    <Button color="warning">warning</Button>
                </div>
                <div>
                    <Button color="danger">danger</Button>
                </div>
                <div>
                    <Button color="link">link</Button>
                </div>
            </div>
        </div>
    )
}