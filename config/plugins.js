module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        params: {
          Bucket: 'abarrote',
        },
      },
    },
  });
   
