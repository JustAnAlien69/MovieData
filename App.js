import *as React from 'react';
import axios from 'axios'
import { View, Text, StyleSheet, Alert } from 'react-native';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        movie_data: [],
    };
}

componentDidMount() {
    this.getMovieData()
}

getMovieData = () => {
    axios
        .get("http://127.0.0.1:5000/")
        .then(response => {
            console.log(response.data.Data)
            this.setState({ movie_data: response.data.Data})
        })
        .catch(error => {
            Alert.alert(error.message)
        })
}


  render() {
    return (
      <View>
        <Text>Movie Data</Text>
         <View>
          {this.state.movie_data.map(item => {
            return (
              <View>
           <Text style={{marginTop:30}}>Title : {item[8]}</Text>
           <Text>{item[3]}</Text>
           <Text>ID : {item[2]}</Text>
           <Text>Release Date : {item[13]}</Text>
           </View>
            );
          })}
        </View>
      </View>
    );
  }
}