import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Badge} from 'react-native-paper';
import {employeeFields} from '../../GlobalData/Modal';
import styles from './style';

const Details = () => {
  const route = useRoute();
  const employeeInfo = route.params.details;
  const fieldInfo = employeeFields;

  return (
    <View style={styles.container}>
      <View style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.heading}>Employee Details</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <View>
            <Badge size={70}>
              {(
                employeeInfo.firstName.charAt(0) +
                employeeInfo.lastName.charAt(0)
              ).toUpperCase()}
            </Badge>
          </View>
        </View>

        <View style={styles.flex2}>
          {Object.keys(employeeInfo).map((data, index) => (
            <View key={index.toString()} style={styles.textContainer}>
              <Text style={styles.field}>{fieldInfo[data]} : </Text>
              <Text style={styles.details}>{employeeInfo[data]}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Details;
