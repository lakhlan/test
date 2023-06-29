import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from'react-native-router-flux';
import styles from './styles';
import { Button } from 'react-native-elements';
import { FlatList } from'react-native-elements';
import { gql, graphql } from'react-apollo';
import Loading from '../Loading';
import { graphqlOperation } from 'aws-amplify';
 
// A hack which will benefit force refetching and avoiding queries
const forceUpdate = require('react-addons-update').forceUpdate;

const GET_COMPANIES = gql`
query GetCompanies {
  listCompanies(limit: 7) {
    items {
      name
      id
    }
  }
}
`
class COMPANIES_SUBSCRIPTION extends React.Component {
  componentWillMount() {
    const company = this.props.company;
    if (!company.isSubscribed)
      this.props.subscribeToMore({
        document:graphqlOperation(GET_COMPANIES),
        updateQuery: (previousResult, { subscriptionData }) => {
          if (!subscriptionData.data) return previousResult;
          const newCompany = subscriptionData.data.listCompanies.items[0];
          return Object.assign({}, previousResult, {
            listCompanies: {
              items: [...previousResult.listCompanies.items, newCompany]
            }
          });
        }
      });
  }

  //   componentWillUpdate(nextProps) {
  //   if (nextProps.currentUser &&!Object.keys(nextProps.currentUser).length){
  //     this.props.subscribeToMore({
  //       document:graphqlOperation(GET_COMPANIES),
  //       updateQuery: (previousResult, { subscriptionData }) => {
  //         if (!subscriptionData.data) return previousResult;
  })
  }
        }
    }

const CompanyList = () => (
  <View>
    
    <Text>Company List</Text>
  </View>
);





export default connect(() => {}, dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
)(() => { return (
  <View>
    <Text style={styles.baseFontSize}>
    About Us
    </Text>
  </View>

);

})


const AboutPage = () => {
  return (
    <View>
      <Text>About Us</Text>
      <Text>
        This app aims to provide a comprehensive platform for job seekers, learners, and shoppers. It combines the features of a job finder, e-learning platform, and e-commerce marketplace to offer a one-stop solution for users.
      </Text>
      <Text>
        Features:
      </Text>
      <Text>
        - Find and apply for various courses from different coaching institutes
      </Text>
      <Text>
        - Compare prices and access course demos
      </Text>
      <Text>
        - Discover private and government job opportunities across all states in India
      </Text>
      <Text>
        - Apply for jobs with just one click
      </Text>
      <Text>
        - Enhance your skills for better job prospects
      </Text>
    </View>
  );
};
i

export default AboutPage;
