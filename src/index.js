import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Article extends React.Component {
    render(){
        return(
            <div className="article" onClick={() => {alert('test')}}>
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}

class Frame extends React.Component {
    render() {
        return(
            <div className="frame">
                <ArticleList />
            </div>
        );
    }
}

class Menu extends React.Component {
    render(){
        return(
            <div className="main-menu">
                <MenuItem destination="products" text="Products"/>
                <MenuItem destination="basket" text="Basket"/>
            </div>
        );
    }
}

function MenuItem(props) {
    return(
        <div className="menu-item">
            <a href={props.url}>{props.text}</a>
        </div>
    );
}

class ArticleList extends React.Component {
    render() {
        return (
            <div className="article-list">
                <Article name="Cholas" id="182"/>
                <Article name="Pisos" id="183"/>
                <Article name="Suelas" id="184"/>
                <Article name="Tenis" id="185"/>
                <Article name="Cholas" id="186"/>
                <Article name="Pisos" id="187"/>
                <Article name="Suelas" id="188"/>
                <Article name="Tenis" id="189"/> 
            </div>
        );
    }
}

function ArticlePreview() {
    return (
        <div>
            test
        </div>
    );
}

function MainFrame() {
    return(
        <div className='main-container'>
            <Menu />
            <Frame />
        </div>
    );
}
  
ReactDOM.render(<MainFrame />, document.getElementById('root'));
  