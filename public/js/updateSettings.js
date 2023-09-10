import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: '/api/v1/users/updateMe',
      data: {
        name,
        email,
      },
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', `data updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
