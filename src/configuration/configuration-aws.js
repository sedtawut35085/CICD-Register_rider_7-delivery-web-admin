import Amplify , {Auth} from 'aws-amplify';

const awsConfig = {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        // identityPoolId: 'ap-southeast-1:26d09956-7796-4bf0-a58d-d48ffa65499f',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        // identityPoolRegion: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ap-southeast-1_yr6NugqdR',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '1rufs744njn5edrgjmmmctrajh',
};
  
Amplify.configure(awsConfig);

export default Auth;
