import React from "react";
import { Card, Button } from "react-bootstrap";

class ProjCard extends React.Component { 
    onPress = (pid) => {
        this.props.onPress(this.props.pid);
    }

    render() {
        return (
            <Card className="bg-dark text-white" data-bs-theme="dark" style={{width:"25rem"}}>
                {(this.props.img) ? <Card.Img variant="top" src={this.props.src} style={this.props.style}></Card.Img> 
                    : <p hidden>Hidden</p>}
                <Card.Body>
                    <Card.Title style={{fontSize:"22pt"}}>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                </Card.Body>
                {(this.props.moreInfo) ?
                <Card.Footer>
                    <Button variant="outline-primary" onClick={() => this.onPress()}>See more</Button>
                </Card.Footer> : <p hidden>Hidden</p>}
            </Card>
        )
    }
}

export default ProjCard;