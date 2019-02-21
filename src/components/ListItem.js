import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './Common/Common';

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
