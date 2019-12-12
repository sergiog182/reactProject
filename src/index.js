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

class FrameProducts extends React.Component {
    render() {
        return(
            <div className="frame">
                <ArticleList />
                <ArticlePreview />
            </div>
        );
    }
}

class FrameBucket extends React.Component {
    render() {
        return(
            <div className="frame">
                Bucket
            </div>
        );
    }
}

class Menu extends React.Component {
    render(){
        return(
            <div className="main-menu">
                <MenuItem destination="products" text="Products" selected={this.props.selected === 'products' ? true : false} click={this.props.click} />
                <MenuItem destination="bucket" text="Bucket" selected={this.props.selected === 'bucket' ? true : false} click={this.props.click}/>
            </div>
        );
    }
}

function MenuItem(props) {
    const style = "menu-item" + (props.selected ? " selected" : "");
    const destination = props.destination;
    if (props.selected) {
        return(
            <div className={style} id={destination}>
                <a href={props.url}>{props.text}</a>
            </div>
        );    
    } else {
        return(
            <div className={style} id={destination} onClick={props.click}>
                {props.text}
            </div>
        );
    }
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
        <div className="article-preview">
            test
        </div>
    );
}

class MainFrame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view: props.view,
        };
        this.handleChangeMenu = this.handleChangeMenu.bind(this);
    }
    
    handleChangeMenu(view){
        this.setState({view: view.target.id});
    }

    render() {
        const view = this.state.view;

        if (view === 'products') {
            return(
                <div className='main-container'>
                    <Menu selected='products' click={this.handleChangeMenu}/>
                    <FrameProducts />
                </div>
            );
        } else {
            return(
                <div className='main-container'>
                    <Menu selected='bucket'click={this.handleChangeMenu}/>
                    <FrameBucket />
                </div>
            );
        }
        
    }
}
  
ReactDOM.render(<MainFrame view="products"/>, document.getElementById('root'));
  