export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ee7l3521c7.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_zcxC8GNVh",
    APP_CLIENT_ID: "5sh7fr9uv09k2oahpvc3ct1jks",
    IDENTITY_POOL_ID: "us-east-2:1a147fb2-e82b-4a55-8ac7-1208a7938eaa",
  },
};
