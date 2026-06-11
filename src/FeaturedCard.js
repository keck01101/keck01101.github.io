import React from "react";
import { Card, Button } from "react-bootstrap";

class FeaturedCard extends React.Component { 
    onPress = (pid) => {
        this.props.onPress(this.props.pid);
    }

    render() {
        return (
            <Card className="bg-dark text-white" data-bs-theme="dark" style={{width:"25rem"}} border="warning">
                <Card.Header>🏆 Featured Project 🏆</Card.Header>
                {(this.props.img) ? <Card.Img variant="top" src={this.props.src} style={{width:"20rem", marginLeft:"auto", marginRight:"auto",
                            paddingTop:"20px", ...this.props.imgStyle}}></Card.Img> 
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

export default FeaturedCard;