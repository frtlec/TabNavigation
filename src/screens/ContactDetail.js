//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ContactDetail extends Component {
    static navigationOptions=({navigation})=>{
        const user=navigation.getParam('user');
        return{
            title:`${user.name.first} ${user.name.last}`
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Contact Detail</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

//make this component available to the app
export default ContactDetail;
