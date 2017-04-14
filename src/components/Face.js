import React from 'react';
import PropTypes from 'prop-types';

var propTypes = {
    /**
     * URL of hover image
     */
    hoverImage: PropTypes.string,

    /**
     * link address
     */
    link: PropTypes.string,

    /**
     * URL of image
     */
    image: PropTypes.string
}

class Face extends React.Component {
    render() {
        let hoverImage = {
            background: `url('${this.props.hoverImage}') center center no-repeat #fff`,
            backgroundSize: `50px 50px`
        };

        return (
            <div className="nak-face-wrapper" style={ hoverImage }>
                <a href={ this.props.link }>
                    <img src={ this.props.image }/>
                </a>
            </div>
        );
    }
}

Face.propTypes = propTypes;

Face.defaultProps = {
    link: '#'
};

export default Face;