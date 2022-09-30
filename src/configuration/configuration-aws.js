import Amplify , {Auth} from 'aws-amplify';

const awsConfig = {
        region: 'ap-southeast-1',
        userPoolId: 'ap-southeast-1_yr6NugqdR',
        userPoolWebClientId: '1rufs744njn5edrgjmmmctrajh',
};
  
Amplify.configure(awsConfig);

export default Auth;
