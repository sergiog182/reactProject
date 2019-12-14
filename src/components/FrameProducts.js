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

    getAvailability(jsonData) {
        let items = [];
        jsonData.variation_list.forEach((element) => {
            if (element.availability > 0) {
                items[element.sku] = element.size;
            }
        });
        return items;
    }
    
    handleArticleChange(e){
        const name = e.target.getAttribute("productname");
        const id = e.target.getAttribute("productid");
        fetch(
            "http://localhost:8080/www.adidas.com/api/products/" + id + "/availability", 
            {
                method: 'get', 
                headers: {
                    'Content-Type':'application/json'
                },
                mode: 'cors'
            }
        )
        .then(res => res.json())
        .then((data) => {
          const arraySizes = this.getAvailability(data);
          this.setState({articleId: id, articleName: name, articleSizes: arraySizes});
        })
        .catch(console.log);
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