import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './Common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((c) => {
                this.setState({ error: c.message, loading: false });
            });
        });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <CardSection>
                    <Spinner />
                </CardSection>
            );
        }
        return (
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    ورود
                </Button>
            </CardSection>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={(email) => {
                        this.setState({ email });
                    }}
                        placeHolder='Email' 
                    />
                </CardSection>
                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={(password) => {
                        this.setState({ password });
                    }}
                        placeHolder='password'
                        secureTextEntry 
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text> 
                {this.renderButton()}
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

export default LoginForm;
