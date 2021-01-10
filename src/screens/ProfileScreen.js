import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import PocketData from '../components/PocketData';
import CustomButton from '../components/CustomButton';
import { loadUser, logout } from '../store/actions/auth';
import LoadingSpinner from '../components/LoadingSpinner';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const formatDate = date => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('-');
  };

  const editProfileHandler = () => {
    navigation.navigate('edit-profile');
  };

  const logoutHandler = () => {
    dispatch(logout(navigation));
  };

  return (
    <View style={styles.screen}>
      <View>
        <PocketData upperText='Name' lowerText={user.name} align='center' />
        <PocketData upperText='Email' lowerText={user.email} align='center' />
        <PocketData
          upperText='User since'
          lowerText={formatDate(user.createdAt)}
          align='center'
        />
      </View>
      <View>
        <CustomButton
          text='Edit Profile'
          color='black'
          onPress={editProfileHandler}
        />
        <CustomButton text='Change Password' color='black' />
        <CustomButton text='Log Out' color='black' onPress={logoutHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default ProfileScreen;
