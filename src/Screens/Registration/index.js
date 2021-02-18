import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import getRealm from '../../../databases/DBOperations';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import {employeeFields} from '../../GlobalData/Modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';

const Registration = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const employeeInfo = route.params ? route.params.details : {};
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isFocused) {
      if (Object.keys(employeeInfo).length) {
        setEmployeeDetails(employeeInfo);
      }
    }
  }, [isFocused]);

  const onChangeText = (text, key) => {
    let datas = {...employeeDetails};
    if (text) {
      datas[key] = text;
    } else {
      if (datas[key]) delete datas[key];
    }
    setEmployeeDetails(datas);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let datas = {...employeeDetails};
    datas['dob'] = moment(currentDate).format('DD/MM/YYYY');
    setEmployeeDetails(datas);
  };

  const onsubmit = async () => {
    if (
      Object.keys(employeeDetails).length === Object.keys(employeeFields).length
    ) {
      setIsLoading(true);
      let details = {...employeeDetails};
      const realm = await getRealm();
      try {
        realm.write(() => {
          realm.create('EmployeesList', details);
          navigation.navigate('Home');
          setIsLoading(false);
        });
      } catch (err) {
        const data = Array.from(realm.objects('EmployeesList'));
        let index = data.findIndex((x) => x.firstName === details.firstName);
        realm.write(() => {
          Object.keys(details).map((item) => {
            if (item !== 'firstName') data[index][item] = details[item];
          });
          navigation.navigate('Home');
          setIsLoading(false);
        });
      }
      setEmployeeDetails({});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Employee Registration</Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        style={styles.scrollView}>
        {Object.keys(employeeFields).map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => {
              item === 'dob' ? setShow(true) : {};
            }}>
            <TextInput
              style={styles.input}
              keyboardType={
                item === 'mobileNo'
                  ? 'numeric'
                  : item === 'email'
                  ? 'email-address'
                  : 'default'
              }
              editable={item === 'dob' ? false : true}
              placeholder={employeeFields[item]}
              onChangeText={(text) => onChangeText(text, item)}
              value={employeeDetails[item]}
            />
          </TouchableOpacity>
        ))}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onsubmit()} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.loader}>
        <ActivityIndicator animating={isLoading} size={60} color="blue" />
      </View>
    </View>
  );
};

export default Registration;
