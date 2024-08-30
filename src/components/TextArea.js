import React, { useState } from 'react'

export default function TextArea({ heading = 'Enter Your Momories' }) {
    const [text, setText] = useState('')

    
    function toUpCase() {
        if (text !== '') {
            let upText = text.toUpperCase()
            setText(upText)
            alert('Converted To Upper Case!')
        } else {
            alert('Nothing To Upper Case!')
        }
    }
    
    
    function toLoCase() {
        if (text !== '') {
            let loText = text.toLowerCase()
            setText(loText)
            alert('Converted To Lower Case!')
        } else {
            alert('Nothing To Lower Case!')
        }
    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    function copyText() {
        if (text !== '') {
            navigator.clipboard.writeText(text)
            alert('Copied To Clipboard!')
        } else {
            alert('Nothing To Copy!')
        }
    }

    function cutText() {
        if (text !== '') {
            navigator.clipboard.writeText(text)
            setText('')
            alert('Cut To Clipboard!')
        } else {
            alert('Nothing To Cut!')
        }
    }

    function clearText() {
        if (text !== '') {
            setText('')
        } else {
            alert('Nothing To Clear!')
        }
    }

    function removeExtraSpaces() {
        if (text !== '') {
            let newText = text.split(/[ ]+/).join(' ')
            alert('Removed Extra Spaces!')
            setText(newText)
        } else {
            alert('Nothing To Remove!')
        }
    }

    function firstLetterUpCase() {
        if (text !== '') {
            let newText = text.split(/[ ]+/).join(' ')
            let newTextArr = []
            let newTextSplit = newText.split(' ')
            newTextSplit.forEach(e => {
                let upLetter = e.charAt(0).toUpperCase()
                let restWord = e.slice(1)
                let upWord = upLetter + restWord
                newTextArr.push(upWord)
                let para = newTextArr.slice(',').join(' ')
                setText(para)
            })
            alert('First Letter Is Converted To Upper Case!')
        } else {
            alert('Nothing To Upper Case!')
        }
    }


    

    return (
        <>
            <div className="container w-50 my-5 d-flex justify-content-center align-items-center flex-column">
                <h1 className='success'>{heading}</h1>
                <textarea className="form-control my-5" id="exampleFormControlTextarea1 " rows="10" value={text} onChange={handleOnChange}></textarea>
                <div className="container d-flex justify-content-around align-items-center flex-wrap">
                    <button className="btn btn-success m-3" onClick={toUpCase}>To UpCase</button>
                    <button className="btn btn-success m-3" onClick={toLoCase}>To LoCase</button>
                    <button className="btn btn-success m-3" onClick={copyText}>Copy</button>
                    <button className="btn btn-success m-3" onClick={cutText}>Cut</button>
                    <button className="btn btn-success m-3" onClick={clearText}>Clear</button>
                    <button className="btn btn-success m-3" onClick={removeExtraSpaces}>Remove Spaces</button>
                    <button className="btn btn-success m-3" onClick={firstLetterUpCase}>F.L UpCase</button>
                </div>
                <div className="container">
                    <p> <strong>{text.split(/[ ]+/).length - 1}</strong> words , <strong>{text.split(/[ ]+/).join('').length}</strong> characters , <strong>{text.split('.').length - 1}</strong> paragraphs</p>
                </div>
            </div>
            <audio id='clickSound'>
                <source src='./audio/playGame.wav' type='audio/wav'></source>
            </audio>
        </>
    )
}
