import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import getRealm from '../../../databases/DBOperations';
import {employeeFields} from '../../GlobalData/Modal';
import styles from './style';

const Home = () => {
  const navigation = useNavigation();
  const fields = Object.keys(employeeFields);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    const realm = await getRealm();
    const data = Array.from(realm.objects('EmployeesList'));
    let list = [];
    data.forEach((data) => {
      let employee = {};
      fields.forEach((item) => {
        employee[item] = data[item];
      });
      list.push(employee);
    });
    if (list.length)
      list.sort((a, b) =>
        a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0,
      );
    setIsLoading(false);
    setList(list);
  }

  const onDelete = async (name, listIndex) => {
    setIsLoading(true);
    const realm = await getRealm();
    realm.write(() => {
      const data = Array.from(realm.objects('EmployeesList'));
      let index = data.findIndex((x) => x.firstName === name);
      const employee = realm.objects('EmployeesList')[index];
      realm.delete(employee);
      let empList = [...list];
      empList.splice(listIndex, 1);
      setList(empList);
      setIsLoading(false);
    });
  };

  const renderItem = ({item, index}) => (
    <View style={styles.flex1}>
      <View style={styles.listContainer}>
        <View style={styles.nameContainer}>
          <Text>{item.firstName}</Text>
          <Text> {item.lastName}</Text>
        </View>
        <View style={styles.flex2}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.delete]}>
              <Text
                style={styles.buttonText}
                onPress={() => onDelete(item.firstName, index)}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.update]}>
              <Text
                style={styles.buttonText}
                onPress={() =>
                  navigation.navigate('Registration', {
                    details: item,
                  })
                }>
                update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.details]}
              onPress={() =>
                navigation.navigate('Details', {
                  details: item,
                })
              }>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee List</Text>
      <FlatList
        refreshing
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.loader}>
        <ActivityIndicator animating={isLoading} size={60} color="blue" />
      </View>
    </View>
  );
};

export default Home;
