'use strict';
import React, {Component} from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage,
  AlertIOS,
  Text,
  View
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName,
    });
  }
  async onLogout() {
    console.log('triggered')
    try {
        const ACCESS_TOKEN = 'access_token';
        await AsyncStorage.removeItem(ACCESS_TOKEN)
        this.props.navigator.resetTo({name: 'Root'});
    } catch(error) {
        console.log("Something went wrong");
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navigate.bind(this, 'BlogPostForm')} style={styles.button}>
          <Text style={styles.buttonText}>
            Create New Post
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this, 'Posts', this.props.posts)} style={styles.button}>
          <Text style={styles.buttonText}>
            View Posts
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onLogout.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 180
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

export default Home
