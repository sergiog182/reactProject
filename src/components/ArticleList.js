import React from 'react';
import Article from './Article';

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

export default ArticleList;