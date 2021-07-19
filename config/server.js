module.exports = ({ env }) => ({
  host: env('mongodb+srv://admin:12345@abarrote.sirs1.mongodb.net/abarrote?retryWrites=true&w=majority', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8c69d1fce3b68bc8859085c67662fbdd'),
    },
  },
});
