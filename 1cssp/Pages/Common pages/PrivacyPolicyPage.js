import React from 'react';
import { View, Text } from 'react-native';

const PrivacyPolicyPage = () => {
  const privacyPolicy = `
    Privacy Policy
  
    This Privacy Policy explains how we collect, use, and protect your personal information when you use our app. By using the app, you consent to the terms outlined in this policy.

    1. Information Collection:
    - We collect personal information, such as your name, email address, and contact details, when you register an account or make a purchase.
    - We may collect additional information, such as your location and browsing activity, to personalize your experience.

    2. Information Usage:
    - We use the collected information to provide and improve our services, such as matching job seekers with suitable opportunities, processing orders, and delivering personalized content.
    - We may use your information to send you promotional offers, updates, and relevant notifications.

    3. Information Sharing:
    - We may share your personal information with trusted third-party service providers who assist us in delivering our services.
    - We do not sell or rent your personal information to third parties without your consent.

    4. Data Security:
    - We implement security measures to protect your personal information from unauthorized access, misuse, or disclosure.
    - However, please note that no method of transmission over the internet or electronic storage is 100% secure.

    5. Cookies:
    - We use cookies and similar technologies to enhance your browsing experience and collect usage information.
    - You can control cookies preferences through your browser settings.

    6. Data Retention:
    - We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
    - You can request the deletion of your personal information by contacting us.

    For more details about our data handling practices, please refer to our full Privacy Policy available on our website.

    If you have any questions or concerns regarding your privacy, please contact us for further assistance.
  `;

  return (
    <View>
      <Text>Privacy Policy</Text>
      <Text>{privacyPolicy}</Text>
    </View>
  );
};

export default PrivacyPolicyPage;
