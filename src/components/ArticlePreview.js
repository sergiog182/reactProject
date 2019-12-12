import React from 'react';

function ArticlePreview(props) {
    return (
        <div className="article-preview">
            <div className="image-container">
                <img src={props.img} alt={props.articleId} />
                Image
            </div>
            <div class="add-form">
                FORMA
            </div>
        </div>
    );
}

export default ArticlePreview;