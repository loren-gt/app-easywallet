const axios = require('axios');

const authorized = 'https://run.mocky.io/v3/8fafdd68-a090-496f-8c9a-3442cf30dae6';

const notified = 'http://o4d9z.mocklab.io/notify';

const authorizeTransaction = async () => (
  axios.get(authorized)
    .then((res) => ({
      code: res.status,
      message: res.data.message,
    }))
    .catch((e) => ({
      code: e.response.status,
      message: e.response.statusText,
    }))
);

const notifyTransaction = async () => (
  axios.get(notified)
    .then((res) => res.data)
    .catch(() => notifyTransaction())
);

module.exports = { authorizeTransaction, notifyTransaction };