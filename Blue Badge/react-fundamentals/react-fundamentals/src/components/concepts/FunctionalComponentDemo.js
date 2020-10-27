import React from 'react';
import HelloWorld from './HelloWorld';
import HelloWorldFatArrow from './HelloWorldFatArrow';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";


// const FunctionalComponentDemo = function () {
//     return (
//         <div className="main">
//             <div className="mainDiv">
//                 <div>
//                     Hello React
//                 </div>
//                 <div>
//                     How are you today?
//                 </div>
//             </div>
//         </div>
//     );
// };

//written better as Arrow Function below

const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <div>
                    <h1>Functional Component</h1>
                    <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
                    <dl>
                        <dt>Can use stat</dt>
                        <dd>With the 'useState' hook, functional components can now both render a display to the page and update the inforamtion to be shown.</dd>
                        <dt>No 'this' keyword</dt>
                        <dd>Older class components use 'this', functional componets have no 'this' object.</dd>
                        <dt>Can use effects</dt>
                        <dd>With the 'useEffect' hook, funcational components can perform side effect with any props or state changes.</dd>
                        <dt>return()</dt>
                        <dd>Must return a single element, but this element may have nested elements inside.</dd>
                    </dl>
                    <h1>Functional Syntax versus Arrow Function</h1>
                    <hr/>
                    <h1>Challenge</h1>
                    <HelloWorld /><HelloWorldFatArrow />
                </div>
            </div>
        </div>
    );
};


export default FunctionalComponentDemo;