import React from 'react';  

class SizeSelector extends React.Component {
    createSelectItems() {
        const sizes = this.props.sizes;
        let items = [];
        items.push(<option key={-1} id={0} value={0}> - Select an option - </option>);
        if (sizes.lenght !== 0){
            sizes.forEach((element, index) => {
                items.push(<option key={index} id={index} value={index}>{element}</option>);
            });
        }
        return items;
    }

    render() {
        return(
            <select onChange={this.props.change}> 
                {this.createSelectItems()}
            </select>
        )
    }
}

export default SizeSelector;