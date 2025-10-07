import { API_URL, EndPoints } from './const.js';

export const getPhotos = () => fetch(`${API_URL}${EndPoints.GET}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const sendData = (body) => fetch(`${API_URL}${EndPoints.POST}`, {
  method: 'post',
  body
});
