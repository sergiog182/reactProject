import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render(){
        return(
            <div className="main-menu">
                <MenuItem destination="products" text="Products" selected={this.props.selected === 'products' ? true : false} click={this.props.click} />
                <MenuItem destination="bucket" text="Bucket" selected={this.props.selected === 'bucket' ? true : false} click={this.props.click}/>
            </div>
        );
    }
}

export default Menu;