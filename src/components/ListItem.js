import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as Common from './Common/Common';
import * as actions from '../actions';

class ListItem extends Component {

    constructor() {
        super();

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { library, expended } = this.props;
        if (expended) {
            return (
                <Common.CardSection>
                    <Text style={{ flex: 1, paddingRight: 15, paddingLeft: 20, paddingBottom: 12 }}>{library.description}</Text>
                </Common.CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                this
                    .props
                    .selectLibrary(id);
            }}
            >
                <View>
                    <Common.CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </Common.CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateProps = (state, ownProps) => {
    console.log(ownProps);
    const expended = state.SelectedLibraryIdIndex == ownProps.library.id;
    return { expended };
};

export default connect(mapStateProps, actions)(ListItem);
