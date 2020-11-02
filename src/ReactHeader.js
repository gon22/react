import React, { useState } from 'react';

const ReactHeader = (props) => {
    const addConsole = () => console.log('리액트 좋다');
    const [color,setColor] = useState('');
    const [title,setTitle] = useState('about Kino');
    const changeLen = () => {
        if(title === 'about Kino'){
            setTitle('어바웃키노')
        }else{
            setTitle('about Kino')
        }
    }

    const changeColor = () =>{
        if(color===''){
            setColor('red')
        }else{
            setColor('')
        }
    }
    return (
        <header id="wrap_header">
            <div className="header">
                <h1 className="logo" onClick = {addConsole}><a href="#"><b>Logo</b></a></h1>
                <div className="gnb">
                <ul>
                    <li><a href="#" onClick = {changeLen}>{title}</a></li>
                    <li><a href="#" onClick = {changeColor} style = {{color}}>Kit Player</a></li>
                    <li><a href="#">Album Download</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">{props.sub}</a></li>
                </ul>
                </div>
                <a href="" className="btnAll">
                <h2>메뉴</h2>
                </a>
            </div>
        </header>
    )
}

export default ReactHeader;