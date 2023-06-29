import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { bindActionCreators } from 'redux'; 




const ProfilePage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [category, setCategory] = useState('');
  const [documents, setDocuments] = useState({
    tenthClass: '',
    twelfthClass: '',
    bachelorDegree: '',
    aadhaarCard: '',
    panCard: '',
    signature: '',
  });

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handleQualificationsChange = (value) => {
    setQualifications(value);
  };

  const handlePinCodeChange = (value) => {
    setPinCode(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleDocumentUpload = (documentType, imageUri) => {
    setDocuments((prevDocuments) => ({
      ...prevDocuments,
      [documentType]: imageUri,
    }));
  };

  const handleProfileCompletion = () => {
    // Implement profile completion process
    console.log('Profile completion process');
  };

  return (
    <View>
      <Text>Complete Your Profile</Text>
      <Text>Phone Number:</Text>
      <TextInput value={phoneNumber} onChangeText={handlePhoneNumberChange} />
      <Text>Address:</Text>
      <TextInput value={address} onChangeText={handleAddressChange} />
      <Text>Qualifications:</Text>
      <TextInput value={qualifications} onChangeText={handleQualificationsChange} />
      <Text>Pin Code:</Text>
      <TextInput value={pinCode} onChangeText={handlePinCodeChange} />
      <Text>Category:</Text>
      <TextInput value={category} onChangeText={handleCategoryChange} />
      <Text>Upload Documents:</Text>
      <Button title="Upload 10th Class" onPress={() => handleDocumentUpload('tenthClass', 'imageUri')} />
      <Button title="Upload 12th Class" onPress={() => handleDocumentUpload('twelfthClass', 'imageUri')} />
      <Button title="Upload Bachelor's Degree" onPress={() => handleDocumentUpload('bachelorDegree', 'imageUri')} />
      <Button title="Upload Aadhaar Card" onPress={() => handleDocumentUpload('aadhaarCard', 'imageUri')} />
      <Button title="Upload PAN Card" onPress={() => handleDocumentUpload('panCard', 'imageUri')} />
      <Button title="Upload Signature" onPress={() => handleDocumentUpload('signature', 'imageUri')} />
      <Button title="Complete Profile" onPress={handleProfileCompletion} />
    </View>
  );
};

export default ProfilePage;
