import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    marginBottom: 20,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  flex1: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    margin: 5,
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 10,
    height: 80,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  flex2: {
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    padding: 8,
  },
  delete:{
    backgroundColor:'#8B0000'
  },
  update:{
    backgroundColor:'#00008B'
  },
  details:{
    backgroundColor:'#228B22',
    borderTopEndRadius:10,
    borderBottomEndRadius:10
  },
  loader: {
    position: 'absolute',
    right: 0,
    left: 0,
  },
});

export default styles;
