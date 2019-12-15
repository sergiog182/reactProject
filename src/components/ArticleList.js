import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
    render() {
        return (
            <div className="article-list">
                <Article name="SUPERSTAR SHOES" id="EG4958" click={this.props.click}/>
                <Article name="SUPERSTAR BLACK SHOES" id="EG4959" click={this.props.click}/>
                <Article name="SST TRACK JACKET" id="CW1256" click={this.props.click}/>
                <Article name="DART PRECURVE HAT" id="CK5029" click={this.props.click}/>
                <Article name="TREFOIL WARM-UP CREW SWEATSHIRT" id="CY4573" click={this.props.click}/>
                <Article name="ORIGINALS TRIPLE BRANDED CREW SOCKS 3 PAIRS" id="CL5015" click={this.props.click}/>
            </div>
        );
    }
}

export default ArticleList;