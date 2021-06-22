import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View , ImageBackground , Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.sfArea}/>

                <ImageBackground source={require("../assets/bg_image.png")} style={{flex: 1, resizeMode: 'cover'}}>

                <View style={styles.textView}>
                    <Text style={styles.headerTxt}>ISS Tracker App</Text>
                </View>

                <TouchableOpacity style={styles.navBns} onPress={() => {
                    this.props.navigation.navigate("IssLocation")
                }}>
                    <Text style={styles.bnText}>ISS Location</Text>
                    <Text style={styles.knowMore}>{"Know More--->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.bnImage}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navBns} onPress={() => {
                    this.props.navigation.navigate("Meteors")
                }}>
                    <Text style={styles.bnText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"Know More--->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.bnImage}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navBns} onPress={() => {
                    this.props.navigation.navigate("Updates")
                }}>
                    <Text style={styles.bnText}>Updates</Text>
                    <Text style={styles.knowMore}>{"Know More--->"}</Text>
                    <Text style={styles.bgDigit}>3</Text>
                    <Image source={require("../assets/rocket_icon.png")} style={styles.bnImage}/>
                </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    textView: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerTxt: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },

    sfArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    navBns: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50,
        marginBottom: 0,
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: "white"
    },

    bnText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingLeft: 30
    },
    
    bnImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top : -80
    },

    knowMore: {
        paddingLeft: 30,
        color: 'red',
        fontSize: 15
    },

    bgDigit: {
        position: 'absolute',
        color: 'rgba(183, 183, 183, 0.5)',
        fontSize: 150,
        right: 20,
        bottom: -15
    }
  });