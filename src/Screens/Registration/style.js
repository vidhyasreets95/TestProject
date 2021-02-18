import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginVertical: 20,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 10,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  loader: {
    position: 'absolute',
    right: 0,
    left: 0,
  },
});

export default styles;
