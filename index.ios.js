import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';

import Root from './src/containers/Root'
import Register from './src/containers/Register'
import Login from './src/containers/Login'
import Home from './src/containers/Home'
import BlogPostForm from './src/containers/BlogPostForm'
import Posts from './src/containers/Posts'

class newApp extends Component {
  renderScene(route, navigator) {
    if(route.name == 'Root') {
      return <Root navigator={navigator}/>
    }
    if(route.name == 'Register') {
      console.log("nav directing to register")
      return <Register navigator={navigator}/>
    }
    if(route.name == 'Login') {
      return <Login navigator={navigator}/>
    }
    if(route.name == 'Home') {
      return <Home navigator={navigator}/>
    }
    if(route.name == 'BlogPostForm') {
      return <BlogPostForm navigator={navigator}/>
    }
    if(route.name == 'Posts') {
      return <Posts navigator={navigator}/>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Root'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('newApp', () => newApp);
