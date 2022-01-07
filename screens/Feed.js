import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Feeds</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
   backgroundColor:"black"
  },
  Text:{color: "white",
    fontFamily: "Magneto",
    fontSize: RFValue(50)
}
});