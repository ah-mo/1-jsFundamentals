import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";


const HelloWordFatArrow = () => {
    return (
        <div>
            <Card> 
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle>Fat Arrow Function</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText>const HelloWorld = () =></CardText>
                <Button>Go somewhere, man!</Button>
                </CardBody>
            </Card>
        </div>   
    )
}

export default HelloWordFatArrow;