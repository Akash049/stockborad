import React, { Component} from 'react';
import './ListItem.css'
import PropTypes from 'prop-types';

const propTypes =  {
    name : PropTypes.string.isRequired,
    close : PropTypes.number.isRequired,
    volume : PropTypes.number.isRequired,
    sector : PropTypes.string.isRequired,
    latestprice : PropTypes.number.isRequired
}

const defaultProps = {
    name : "Demo_1",
    close : 0,
    volume : 0,
    sector : 'Technology',
    latestprice : 0
}

class ListItem extends Component{
    render(){

        const { name, close, volume, sector, latestprice , type} = this.props;

        const headerStyle = {
            color : type === "Head"?"#536dfe":"dimgray"
        }

        return (
            <div className="listcard" style={headerStyle}>
                <div className="listItem">{name}</div>
                <div className="listItem">{close}</div>
                <div className="listItem">{volume}</div>
                <div className="listItem">{sector}</div>
                <div className="listItem">{latestprice}</div>
            </div>
        )
    }
}

ListItem.propTypes = propTypes;

ListItem.defaultProps = defaultProps;

export default ListItem;
