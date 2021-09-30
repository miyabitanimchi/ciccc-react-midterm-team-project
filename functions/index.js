const functions = require("firebase-functions");

// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// const stripe = require('stripe')(sk_test_51JPt5UBD2W5bE4pxbgB3SdiuJDhuA7YYyTRBACn9Ginr3wPcpWY2m9bl2ZulylLRaW5DMdghdh5BBBiQKsUHInAo006iYJm3o7);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!!!!", { structuredData: true });
  response.send("Hello Taichi!");
});

// exports.createPaymentSession = functions.https.onCall(async (data, context) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//       price_data: {
//         currency: 'cad',
//         product_data: {
//           name: 'product'
//         },
//         unit_amount: 500
//       },
//       quantity: 1
//     }],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/payment_success',
//     cancel_url: 'http://localhost:3000/payment_cancel',
//   });

//   const res = session;
//   console.log(res);
//   return res;
// })