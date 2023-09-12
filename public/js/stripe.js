/* eslint-disable no-undef */
import axios from 'axios';
import { showAlert } from './alerts.js';

const stripe = Stripe(
  'pk_test_51NpZPmLQ30tYE9ar3ENNhIjpQ9ci7ZktkwxvqG8W5bRTktgDhg7hTmtqO1lABO48qGcHPvNt2ZeqOi0nVFqcCdio00zHj4DddY',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
