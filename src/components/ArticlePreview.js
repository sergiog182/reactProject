import React from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

class ArticlePreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productSKU: "",
        }
        this.handleProductChange = this.handleProductChange.bind(this);
    }

    shouldComponentUpdate(pops, states) {
        return (this.state.productSKU !== states.productSKU ? false : true);
    }

    handleProductChange(e){
        //const name = e.target.getAttribute("productname");
        const sku = e.target.value;
        this.setState({productSKU: sku});
    }

    addToBag = () => {
        const article = this.state.productSKU;
        alert(article);
    }

    render(){
        const showForm = (this.props.articleId !== "" ? true : false);
        if (showForm) {
            const imgrsc = require(`../assets/images/${this.props.articleId}.jpg`);
            return (
                <div className="article-preview">
                    <div className="image-container">
                        <img className="big-size-image" src={imgrsc} alt={this.props.articleId} />
                    </div>
                    <div className="add-form">
                        <h1>{this.props.articleName}</h1>
                        <div>
                            Choose Size: <SizeSelector sizes={this.props.articleSizes} change={this.handleProductChange}/>
                            <br />
                            Choose quantity: <QuantitySelector maxQuantity={15} />
                            <br />
                            <button onClick={this.addToBag}> - ADD TO BAG - </button> 
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="article-preview">
                    <div className="image-container">
                        Choose a product
                    </div>
                    <div className="add-form">
                        Choose a product
                    </div>
                </div>
            );
        }
    }
}

export default ArticlePreview;