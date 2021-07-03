import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FirebaseUtil from '_utils/FirebaseUtil';
import { LoginContext } from '_utils/LoginProvider';

export default function HomeScreen() {
  const { user } = useContext(LoginContext);
  const singOut = () => {
    FirebaseUtil.signOut().catch((e) => {
      console.log(e);
      alert('Something went wrong');
    });
  };
  return (
    <View style={styles.container}>
      <Text> Home: {user?.email} </Text>
      <Button onPress={() => singOut()} title="Logout " />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
});
