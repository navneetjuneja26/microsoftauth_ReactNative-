import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad'
import React from 'react'; 

const CLIENT_ID = '8a49e506-8afe-4ab8-a209-9d7563955b4f'

export default class LandingView extends React.Component {

  constructor(props) {
    super(props)
    this.AzureADContext = {
      client_id : CLIENT_ID,
      // Optional
      redirect_url : 'http://localhost:8080',  
      // Optional
      authority_host : 'https://login.microsoftonline.com/common/oauth2/authorize',
      // Optional
      tenant  : 'common',  
      // Optional
      prompt : 'none',
      // Optional
      login_hint : 'user@domain.com',	  
      // This is required if client_id is a web application id
      // but not recommended doing this way.
      client_secret : 'qgvsFAUCCM73)gsfR007@%#',
      resources : [
        'https://graph.microsoft.com',
        'https://outlook.office365.com',
        // ... more resources
      ]
    }
  }

  render() {

  new ReactNativeAD({
    client_id: CLIENT_ID,
    resources: [
      'https://outlook.office365.com'
    ]})
  
    return <ADLoginView
              context={ReactNativeAD.getContext(CLIENT_ID)}
              onSuccess={this.onLoginSuccess.bind(this)}/>
  }

  onLoginSuccess(credentials) {
    console.log(credentials['https://outlook.office365.com'].access_token)
    // use the access token ..
  }

}