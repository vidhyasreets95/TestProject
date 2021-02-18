import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  heading: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    marginHorizontal: '7%',
    marginBottom: '20%',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex2: {
    flex: 2,
  },
  textContainer: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    textAlign: 'center',
    fontSize: 18,
  },
  field: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
