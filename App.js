import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ImageBackground, StyleSheet, Text, View } from 'react-native';

const backgroundImage = {uri: 'https://wallpaperaccess.com/full/2581402.jpg'};

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
      <Text style={styles.titleText}>Spot Me</Text>
      <Text style={styles.bodyText}>Welcome!</Text>
      <StatusBar style="auto"/>
    <View style={styles.fixToText}>
        <Button
          title="Login"
          onPress={() => Alert.alert('Login button')}
          color="#808080"
        />
        <Button
          title="Sign Up"
          onPress={() => Alert.alert('Sign up button')}
          color="#808080"
        />
    </View>
    </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  titleText:{
    fontSize: 40,
    textAlign: 'center',
    color: '#fff'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 35,
    color: 'orange',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
