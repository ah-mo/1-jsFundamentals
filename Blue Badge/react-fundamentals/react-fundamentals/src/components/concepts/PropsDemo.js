import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color,
        backgroundColor,
        borderRadius,
        borderStyle,
        display,
        width,
        textAlign
    }

    const toggleColor = () => {
        color === 'white' ? setColor('#F28500') : setColor('white');
    }

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('limegreen') : setBackgroundColor('purple');
    }

    const toggleBorderRadius = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }

    const toggleTextAlign = () => {
        textAlign === 'center' ? setTextAlign('left') : setTextAlign('center');
    }
    
    const toggleBorder = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                    <FunctionalComponent string="will this display? I wonder about the text color..." function={toggleColor} selectedStyle={color} />
                    <FunctionalComponent string="You bet it will. I wonder about the background color..." function={toggleBackgroundColor} selectedStyle={backgroundColor} />
                    <FunctionalComponent string="What about this? Will it display I wonder about the border radius...?" function={toggleBorderRadius} selectedStyle={borderRadius}  />
                    <FunctionalComponent string="Sure looks like it! I wonder about the text alignment..." function={toggleTextAlign} selectedStyle={textAlign} />
                    <FunctionalComponent string="Change the border!" function={toggleBorder} selectedStyle={borderStyle} />
                </div>
            </div>
        </div>
    )
}

export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Toggle style!</button>
            <TinyComponent selectedStyle={ props.selectedStyle } />
        </div>
    )
}

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : { props.selectedStyle }</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle : 'what style??'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: () => PropTypes.func.isRequired,
    selectedStyle : PropTypes.string.isRequired
}