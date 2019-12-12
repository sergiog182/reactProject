import React from 'react';

class Article extends React.Component {
    render(){
        return(
            <div className="article" onClick={() => {alert('test')}}>
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}

export default Article;