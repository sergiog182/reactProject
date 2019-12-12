import React from 'react';
import ArticleList from './ArticleList';
import ArticlePreview from './ArticlePreview';

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

export default FrameProducts;