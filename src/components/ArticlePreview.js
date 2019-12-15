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
        const sku = e.target.value;
        this.setState({productSKU: sku});
    }

    addToBag = () => {
        document.getElementById("loader").classList.add("active");
        const article = this.state.productSKU;
        const quantity = document.getElementById("cuantitySelector").value;
        if (article !== "") {
            if (typeof sessionStorage.basketId === 'undefined' || sessionStorage.basketId === null) {
                fetch(
                    "http://localhost:8080/www.adidas.com/api/checkout/baskets", 
                    {
                        method: 'post', 
                        headers: {
                            'Content-Type':'application/json'
                        },
                        mode: 'cors',
                        credentials: 'include'
                    }
                )
                .then(res => res.json())
                .then((data) => {
                  if (typeof data.basketId !== 'undefined') {
                    sessionStorage.basketId = data.basketId;
                    this.setProductToBasket(article, quantity);
                  }
                })
                .catch((error) => { document.getElementById("loader").classList.remove("active"); alert("UPS! something went wrong"); console.log(error);});
            } else {
                this.setProductToBasket(article, quantity);
            }
        } else {
            alert("You must choose a size");
            document.getElementById("loader").classList.remove("active");
        }
    }

    setProductToBasket = (article, quantity) => {
        const data = [{"productId": article, "quantity": quantity}];
        fetch(
            "http://localhost:8080/www.adidas.com/api/checkout/baskets/" + sessionStorage.basketId + "/items", 
            {
                method: 'post', 
                headers: {
                    'Content-Type':'application/json'
                },
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(data)
            }
        )
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          document.getElementById("loader").classList.remove("active");
          alert("Article has been added successfully");
        })
        .catch((error) => { document.getElementById("loader").classList.remove("active"); alert("UPS! something went wrong"); console.log(error);});
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
                        <div className="main-form">
                            <div className="input-container">
                                Choose Size: <SizeSelector sizes={this.props.articleSizes} change={this.handleProductChange}/>
                            </div>
                            <br />
                            <div className="input-container">
                                Choose quantity: <QuantitySelector maxQuantity={15} />
                            </div>
                            <br />
                            <br />
                            <button className="btn-form" onClick={this.addToBag}> - ADD TO BAG - </button> 
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