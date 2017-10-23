import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Container, Content , Button , Text} from 'native-base' ;
const FilePickerManager = require('NativeModules').FilePickerManager;
// import FilePickerManager from 'NativeModules' ;
import utf8 from 'utf8' ;
import base64 from 'base-64' ;
import RNFB from 'react-native-fetch-blob' ;
import axios from 'axios';


class Main extends Component {
constructor(){
    super() ;
    this.state= {
        file: ''
    }
}

find(){
    FilePickerManager.showFilePicker(null, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled file picker');
        }
        else if (response.error) {
          console.log('FilePickerManager Error: ', response.error);
        }
        else {
          this.setState({
            file: response
          });
        }
        this.change() ;
      });
}

change(){
    console.log("working")
     RNFB.fs.readFile(this.state.file.uri , 'base64').then((res) => {
        console.log(res)
        
        axios.post('http://192.168.202.2:5700/',{
                data: res
        })
        // let audio = new FormData() ;


    }).catch((err)=> console.log(err))
}

    render() {
        return (
            <Container>
                <Content>
                    <Button onPress={() => this.find()} light >
                        <Text>browse file</Text>
                    </Button>
                </Content>
            </Container>
      );
    };
}

export default Main ;