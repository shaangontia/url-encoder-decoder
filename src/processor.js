import React, { useState } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

function Processor(props) {
    let [processedText, setProcessedText] = useState('');
    function decode() {
        let textToDecode = $('#text').val();
        setProcessedText(decodeURIComponent(textToDecode));
    }
    function encode() {
        let textToDecode = $('#text').val();
        setProcessedText(encodeURIComponent(textToDecode));
    }
    function handleChange(e) {
        setProcessedText(e.target.value);
    }
    return(
        <div className='queryText'>
            <textarea id='text' rows='15' cols='100' value={processedText} onChange={handleChange}></textarea>
            <div className='buttonGroup'>
                <button onClick={decode}>Decode</button>
                <button onClick={encode}>Encode</button>
            </div>
        </div>
    )
}

export default Processor;