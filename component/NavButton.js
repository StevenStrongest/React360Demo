import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    asset,
    VrButton
  } from 'react-360';


  export default class NavButtonInfo extends React.Component{
    render(){
        const {infoButton} = styles;
        return(
            <VrButton>
                <Image style={infoButton} source={asset(this.props.image)}></Image>
            </VrButton>
        );
    }
  }

  const styles = StyleSheet.create({
    infoButton:{
        width: 50,
        height: 50,
        transform: [{translate: [0,0,0]}],
        position: 'absolute'
    }
  })
