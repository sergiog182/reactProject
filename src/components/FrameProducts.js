import React from 'react';
import ArticleList from './ArticleList';
import ArticlePreview from './ArticlePreview';

class FrameProducts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articleId: "",
            articleName: "",
            articleSizes: []
        };
        this.handleArticleChange = this.handleArticleChange.bind(this);
    }
    
    handleArticleChange(e){
        const name = e.target.getAttribute("productname");
        const id = e.target.getAttribute("productid");
        fetch("/api/products/" + id + "/availability")
        //.then(res => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(console.log)
        this.setState({articleId: id, articleName: name});
    }

    render() {
        return(
            <div className="frame">
                <ArticleList click={this.handleArticleChange}/>
                <ArticlePreview articleId={this.state.articleId} articleName={this.state.articleName} articleSizes={this.state.articleSizes}/>
            </div>
        );
    }
}

export default FrameProducts;