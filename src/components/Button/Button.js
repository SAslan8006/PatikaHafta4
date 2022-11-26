import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import styles from './Button.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//temel bir değer atabiliyoruz
const Button = ({ text, onPress, loading, icon, theme = 'primary' }) => {
  return (
    //theme gonderirken base değerini alarak burda containerlerin istediğimiz şekilde olmasını sağlıyoruz..
    <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
       // <View style={styles[theme].button_container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={icon} color="white" size={16} />
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles[theme].title}>{text}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
