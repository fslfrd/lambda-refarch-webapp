// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6pn6ibf9ndir91g3pnu4ban3gf",     // CognitoClientID
  "api_base_url": "https://w5ym551xui.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-ab23lambdaarch.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1whr02pmc22i4.amplifyapp.com"                                      // AmplifyURL
};

export default config;
