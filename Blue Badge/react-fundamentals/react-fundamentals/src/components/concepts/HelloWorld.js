import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";


const HelloWorld = function () {
    return (
        <div>
            <Card> 
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle>Regular Ol' Function</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText>const HelloWorld = function()</CardText>
                <Button>Go somewhere, yo!</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default HelloWorld;