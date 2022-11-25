import React from "react";
import {View, Text} from "react-native";

const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {{fontSize : 60, fontWeight: 'bold', letterSpacing: 5}}>HOME</Text>
      </View>
    );
  };

export default HomeScreen;