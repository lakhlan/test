import React, { useState } from 'react';
import { View, Text, Switch, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from './styles';
import { actions } from './actions';
import { actions as authActions } from '../auth/actions';
import { actions as categoryActions } from '../category/actions';
import { actions as cartActions } from '../cart/actions';
import { actions as userActions } from '../user/actions';

const { signOut, updateUserEmail } = authActions;
const { getStampedCategories } = categoryActions;
const { updateCartItems } = cartActions;
const { getCurrentUser } = userActions;

export const Settings = props => {
  const [showModal, setShowModal] = useState(false);
  const {
    companies,
    signOut,
    updateCartItems,
    getStampedCategories,
    updateUserEmail,
    getCurrentUser
  } = props;

  console.log(companies);


  return (
    <View style={styles.mainContainer}>
ext style={styles.stylesTitle}>Settings</Text>
    </View>
  );
};

const mapStateToProps = state => {
  const companyList = [];
  const companies = state.productsCatalogReducer.companies;
  for (let i = 0; i < companies.length; i++) {
    companyList.push(companies[i].name);
  }
  return {
    companyList,
    companies
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getStampedCategories,
  signOut,
  updateCartItems,
  updateUserEmail,
  getCurrentUser
}, dispatch);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  stylesButtons: { flexDirection: 'row', backgroundColor: '#023C69' },
  btnGrey: { padding: 16, color: '#fff' },
  stylesTitle: {
    fontSize: 20,
    flex: 1
  },
  logo: {
    width: 32,
    height: 32
  },
  }
);



const SettingsPage = () => {
  const [twoFactorAuthEnabled, setTwoFactorAuthEnabled] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');

  const handleTwoFactorAuthToggle = () => {
    setTwoFactorAuthEnabled((prevValue) => !prevValue);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleUserIdChange = (value) => {
    setUserId(value);
  };

  const handleSaveSettings = () => {
    // Implement code to save settings securely
    console.log('Save Settings');
  };

  return (
    <View>
      <Text>App Settings</Text>
      <View>
        <Text>Two-Factor Authentication:</Text>
        <Switch value={twoFactorAuthEnabled} onValueChange={handleTwoFactorAuthToggle} />
      </View>
      <View>
        <Text>New Password:</Text>
        <TextInput secureTextEntry value={password} onChangeText={handlePasswordChange} />
      </View>
      <View>
        <Text>New Email:</Text>
        <TextInput value={email} onChangeText={handleEmailChange} />
      </View>
      <View>
        <Text>User ID:</Text>
        <TextInput value={userId} onChangeText={handleUserIdChange} />
      </View>
      <Button title="Save Settings" onPress={handleSaveSettings} />
    </View>
  );
};

export default SettingsPage;
