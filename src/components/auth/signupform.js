import React, { Component } from 'react';
import { Container, Content, Body, Card, Text, CardItem, Form, Item, Input, Label, Spinner, Button , Header, Left} from 'native-base';
import { StyleSheet } from 'react-native' ;
import { AuthActions } from '../../store/actions/action' ;
import { connect } from 'react-redux';

class SignupForm extends Component{

    constructor(){
        super() ;
        this.state = {
            email: '' ,
            password: ''
        }
    }

    submit(){
        const { email, password } = this.state ;
        let user = { email, password }
        if( !email || !password ){
            alert('Please write something..') ;
        }else{
            this.props.signupUser(user)
        }
    }

    render(){
        return(
            <Container>
                <Content style={{backgroundColor: 'pink' , paddingTop: 20,}} >
                <Card>
                    <CardItem header style={{justifyContent:'center',}}>
                        <Text style={{fontSize:30 , fontStyle: 'italic' , fontWeight: 'bold'}} >Signup Form</Text>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Form >
                            <CardItem>
                                <Item floatingLabel>
                                    <Label>EMAIL</Label>
                                    <Input
                                        onChangeText={(email) => this.setState({email}) }
                                        value={this.state.email} 
                                    />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item floatingLabel>
                                    <Label>PASSWORD</Label>
                                    <Input
                                        secureTextEntry
                                        onChangeText={(password) => this.setState({password})}
                                        value={this.state.password}
                                    />
                                </Item>
                            </CardItem>
                        </Form>
                    </Body>
                    </CardItem>
                    <CardItem footer >
                        <Container style={{height:70 ,flexDirection:'row',alignItems:'flex-start',justifyContent:'space-around',}} >
                            <Button success onPress={() => this.submit() } >
                                <Text>SignUp</Text>
                            </Button>
                            <CardItem button >
                                <Text>Already have an account?</Text>
                            </CardItem>
                        </Container>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (userData) => dispatch(AuthActions.signupUser(userData))
    };
};

export default connect(null , mapDispatchToProps)(SignupForm) ;