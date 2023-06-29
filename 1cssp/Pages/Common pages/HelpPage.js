import React from 'react';
import { View, Text } from 'react-nativeexpress';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphqlOperation } from 'aws-amplify';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import{colors,js} from '..shared/colors';
import { Button } from 'react-native-elements';

const jobTextQuery = `query{
  getJobText
  jobText
}`;



  const mapStateToProps = state => {
    return {
      currentUser: state.currentUser,
      entries: state.entries,
    };
  };

  // const calcTotal = (entries) => {
  //
  // };
  //
  // const calcTotal = (entries) => {
  //   let total = 0;
  //   for (let entry of entries) {
  //     total += parseInt(entry.price);
  //   }
  //   return total;
  // };


  const withJobText = graphql(jobTextQuery, {
    props: gql => ({
      data: gql.data.getJobText,
    }),
    options: {
      fetchPolicy: 'cache-and-network'
    }
  })

  const self = graphql(gql`
    query {
      entries {
        id
        description
        category
        shopName
        locationTag
        productName
        price
        condition
        owner {
          username
        }
      }
    }
  }


const HelpPage = () => {
  return (
    <View>
      <Text>Help & Support</Text>
      <Text>
        If you need assistance or have any questions regarding the app, please refer to the following resources:
      </Text>
      <Text>
        - Frequently Asked Questions (FAQs): Find answers to common queries about job searching, e-commerce, and e-learning features.
      </Text>
      <Text>
        - Contact Us: Reach out to our support team directly for personalized assistance. Provide a detailed description of your issue or question.
      </Text>
      <Text>
        - User Guide: Access a comprehensive guide that explains how to use various app features and functionalities.
      </Text>
      <Text>
        - Troubleshooting: If you encounter any technical difficulties, check the troubleshooting section for potential solutions.
      </Text>
    </View>
  );
};

export default HelpPage;
