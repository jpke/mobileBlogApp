import React, {Component} from 'react'
import "whatwg-fetch"
import {
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const ACCESS_TOKEN = 'access_token';

class Posts extends Component {
  constructor() {
    super()
    this.listPost.bind(this)
    this.state = {
      posts: [],
      isLoading: true
    }
  }
  componentDidMount() {
    this.fetchPosts()
  }
  fetchPosts() {
    this.setState({isLoading: true})
    fetch('http://localhost:8080/blog/posts', {
    // fetch('https://portfolio-express.herokuapp.com/blog/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(posts => {
      console.log("posts: ", posts);
      this.setState({posts: posts, isLoading: false})
    })
  }
  // async deletePost(postID) {
  //   try {
  //     let response = await fetch('http://localhost:8080/blog/posts', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       },
  //       body: JSON.stringify({_id: postID}),
  //     })
  //     let res = await response.json();
  //     if(response.status >= 200 && response.status < 300) {
  //       // delete post from array
  //       this.fetchPosts();
  //     } else {
  //       let errer = res;
  //       throw error;
  //     }
  //   } catch(errors) {
  //     let formErrors = JSON.parse(errors);
  //     let errorsArray = [];
  //     for(var key in formErrors) {
  //       if(formErrors[key].length > 1) {
  //         formErrors[key].map(error => errorsArray.push(`${key} ${error}`));
  //       } else {
  //         errorsArray.push(`${key} ${formErrors[key]}`);
  //       }
  //     }
  //     this.setState({errors: errorsArray});
  //   }
  // }
  deletePost(postID) {
    console.log("fetching... delete: ", postID)
    let accessToken;
    return accessToken = AsyncStorage.getItem(ACCESS_TOKEN)
    .then((accessToken) => {
      fetch('http://localhost:8080/blog/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({_id: postID}),
      })
      .then((res) => {
        // res = res.json();
        if(res.status >= 200 && res.status < 300) {
          // delete post from array
          this.fetchPosts();
        } else {
          console.log("ERROR: ", res)
          this.setState({errors: res})
        }
      })
    })
  }

  listPost = (post, index) => (
      <View key={index} style={styles.post}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postDescription}>{post.description}</Text>
        <Text>{post.body}</Text>
        <TouchableHighlight onPress={this.deletePost.bind(this, post._id)} style={styles.deletePostButton}>
          <Text style={styles.deletePostButtonText}>
            Delete
          </Text>
        </TouchableHighlight>
      </View>
  )
  navigate(routeName) {
    this.props.navigator.resetTo({
      name: routeName,
    });
  }
  render() {
    let spinner = this.state.isLoading ? (<ActivityIndicator size= 'large'/>) : (<View/>)
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navigate.bind(this, 'BlogPostForm')} style={styles.button}>
          <Text style={styles.buttonText}>
            Create New Post
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this, 'Home')} style={styles.button}>
          <Text style={styles.buttonText}>
            Home
          </Text>
        </TouchableHighlight>
        {spinner}
        <ScrollView>
          {(this.state.posts) ? this.state.posts.map(this.listPost) : <Text style={styles.postTitle}>No Posts Yet</Text>}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  postTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  postDescription: {
    alignSelf: 'center',
    fontStyle: 'italic'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  post: {
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10
  },
  deletePostButton: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  deletePostButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
})

export default Posts
