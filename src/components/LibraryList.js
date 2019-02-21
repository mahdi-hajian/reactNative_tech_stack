import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library) {
        return <ListItem library={library} />;
    }
    render() {
        return (
            <FlatList 
                data={this.props.Librares}
                renderItem={this.renderItem}
                keyExtractor={(library => library.id)}
            />
        );
    }
}

const mapStateToProps = state => ({ Librares: state.Librares });

export default connect(mapStateToProps)(LibraryList);
