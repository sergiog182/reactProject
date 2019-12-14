import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
    render() {
        return (
            <div className="article-list">
                <Article name="Superstar Shoe" id="EG4958" click={this.props.click}/>
                
            </div>
        );
    }
}

export default ArticleList;