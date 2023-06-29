import React from 'react';
import { View, Text } from 'react-native';

const TermsAndConditionsPage = () => {
  const termsAndConditions = `
    Welcome to our app! By accessing and using this app, you agree to comply with the following terms and conditions:
  
    1. Usage: This app is intended for job searching, e-commerce, and e-learning purposes. You may use the app to find job opportunities, purchase products, and access educational content.
  
    2. Account: You are responsible for maintaining the confidentiality of your account credentials. Any activity conducted through your account will be deemed as your responsibility.
  
    3. Content: The app provides job listings, product information, and educational materials. The accuracy and reliability of such content are not guaranteed. Use the information at your own risk.
  
    4. Privacy: We respect your privacy and handle personal information in accordance with our Privacy Policy. By using this app, you consent to the collection and processing of your personal data.
  
    5. Prohibited Actions: You must not engage in any illegal, fraudulent, or unauthorized activities through this app. Violation of these terms may result in account suspension or legal action.
  
    6. Limitation of Liability: We are not liable for any direct, indirect, or consequential damages arising from your use of this app. Use the app at your own risk.
  
    7. Modification: We reserve the right to modify or update these terms and conditions at any time. It is your responsibility to review the terms periodically for any changes.
  
    If you have any questions or concerns regarding these terms and conditions, please contact us for further clarification.
  `;

  return (
    <View>
      <Text>Terms and Conditions</Text>
      <Text>{termsAndConditions}</Text>
    </View>
  );
};

export default TermsAndConditionsPage;
