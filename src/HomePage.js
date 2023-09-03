import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useState} from 'react';

function HomePage({navigation}) {
  const [userName, setUsername] = useState('');

  return (
    <View>
      <Text style={style.userName}>Username:</Text>
      <TextInput
        style={style.input}
        value={userName}
        onChangeText={newValue => setUsername(newValue)}
      />
      <Button
      title="Join Call"
        onPress={() => {
          navigation.navigate('VideoCallPage', {userName});
        }}
        
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userName: {
    fontWeight: 'bold',
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    fontSize: 30,
  },
});

export default HomePage;
