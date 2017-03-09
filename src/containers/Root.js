'use strict';
import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View
} from 'react-native';

const ACCESS_TOKEN = 'access_token';

export default class Root extends Component {

  componentWillMount() {
    this.getToken();
  }
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(!accessToken) {
          console.log("Token not set");
      } else {
          this.verifyToken(accessToken)
      }
    } catch(error) {
        console.log("Something went wrong");
    }
  }
  //If token is verified we will redirect the user to the home page
  async verifyToken(token) {
    let accessToken = token

    try {
      // let response = await fetch('http://localhost:8080/blog/users', {
      let response = await fetch('https://portfolio-express.herokuapp.com/blog/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      let res = await response.json();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect him to home.
        this.navigate('Home');
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error response: " + error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to a</Text>
          <Text style={styles.title}>Simple Blog App</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={ this.navigate.bind(this,'Register') } style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={ this.navigate.bind(this, 'Login') } style={styles.button}>
            <Text style={styles.buttonText}>Login / Demo</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 15,
    paddingTop: 130,
    paddingBottom: 15,
    alignItems: 'stretch'
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 10
  },
  buttonContainer: {
    alignItems: 'stretch'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});
