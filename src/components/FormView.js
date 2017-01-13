import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View
} from 'react-native'

export default class FormView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      content: ''
    }
  }
  // const {addPost} = this.props;
  onTitleInputChanged(event) {
    this.setState({title: event.nativeEvent.text})
  }
  onDescriptionInputChanged(event) {
    this.setState({description: event.nativeEvent.text})
  }
  onContentInputChanged(event) {
    this.setState({content: event.nativeEvent.text})
  }
  onPress() {
    const {addPost} = this.props;
    this.props.addPost(this.state.title, this.state.description, this.state.content)
    // this.props.navigator.push({
    //   title: 'Posts',
    //   component: Posts
    // })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title}
          placeholder=" Title"
          onChange={this.onTitleInputChanged.bind(this)}/>
        <TextInput style={styles.description}
          placeholder=" Description (optional)"
          onChange={this.onDescriptionInputChanged.bind(this)}/>
        <TextInput style={styles.content}
          placeholder=" Post"
          multiline = {true}
          numberOfLines = {4}
          onChange={this.onContentInputChanged.bind(this)}/>
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableHighlight>
      </View>
    )
  }
  // return (
  //     // <FormView onTitleInputChanged = {this.onPostInputChanged} onDescriptionInputChanged = {this.onDescriptionInputChanged} onPostInputChanged = {this.onPostInputChanged} onPress = {this.onPress} />
  //   <View style={styles.container}>
  //     <TextInput style={styles.title}
  //       placeholder=" Title"
  //       onChange={this.onTitleInputChanged}/>
  //     <TextInput style={styles.description}
  //       placeholder=" Description (optional)"
  //       onChange={this.onDescriptionInputChanged}/>
  //     <TextInput style={styles.content}
  //       placeholder=" Post"
  //       multiline = {true}
  //       numberOfLines = {4}
  //       onChange={this.onContentInputChanged}/>
  //     <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
  //       <Text style={styles.buttonText}>Post</Text>
  //     </TouchableHighlight>
  //   </View>
  // )
}

// export default FormView

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 70,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  },
  description: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  },
  content : {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    height: 100,
    padding: 5,
    fontSize: 17
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
  }
})
