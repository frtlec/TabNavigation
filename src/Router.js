import React from "react";
import { createStackNavigator,createBottomTabNavigator, createAppContainer,createMaterialTopTabNavigator, createDrawerNavigator } from "react-navigation";

//screens
import Home from "./screens/Home";
import Contacts from "./screens/Contacts";
import ContactDetail from "./screens/ContactDetail";
import Settings from "./screens/Settings";
import SettingsModal from './components/SettingsModal';
import DrawerMenu from './components/DrawerMenu';

import Icon from 'react-native-vector-icons/Ionicons'

const ContactStack=createStackNavigator({
    Contacts:{
        screen:Contacts,
        navigationOptions:{
            title:'Contacts',
        }
           
    },
    ContactDetail:{
        screen:ContactDetail
    }

}, {
    headerLayoutPreset: "center"

});


const TabNavigator = createBottomTabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            //tabBarLabel:'Anasayfa'
            tabBarIcon:({tintColor})=>(<Icon name='ios-home' size={22} color={tintColor} />)
        }
    },
    Contacts:{
        screen:ContactStack ,
        navigationOptions:{
            //tabBarLabel:'Anasayfa'
            tabBarIcon:({tintColor})=>(<Icon name='ios-contact' size={22} color={tintColor} />)
        }
    },
    Settings:{
        screen:Settings,
        navigationOptions:{
            //tabBarLabel:'Anasayfa'
            tabBarIcon:({tintColor})=>(<Icon name='ios-settings' size={22} color={tintColor} />)
        }
    }
},{
    tabBarOptions:{
        activeTintColor:'#f8f8f8',
        inactiveTintColor:'#586589',
        showLabel:false,
        style:{
            backgroundColor:'#171f33'
        }
    },
    initialRouteName:'Contacts'
});

const ModalStack=createStackNavigator({
    TabNavigator:{
        screen:TabNavigator
    },
    SettingsModal:{
        screen:SettingsModal
    }

},{
    model:'modal',
    headerMode:'none'
});
const DrawerNavigator=createDrawerNavigator({
    ModalStack:{
        screen:ModalStack
    }
},{
    contentComponent:DrawerMenu
})

export default createAppContainer(DrawerNavigator);