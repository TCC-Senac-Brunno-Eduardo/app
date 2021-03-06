import axios from 'axios';
import { API_BFF_HOST, API_SERVICE_HOST } from "../config";

export const insertMarker = async (latitude, longitude, city, title, description) => {
  try {
    const request = await axios.post(`${API_SERVICE_HOST}/v1/app/marker-report/insert`,
    {
      latitude,
      longitude,
      city,
      title,
      description
    });
    if(request.status === 201) {
      return true;
    }
    return false
  } catch (error) {
    console.log(error.response.status)
    console.log(error.response.data)
    return false
  }
}

export const reverseGeocoding = async (latitude, longitude) => {
  try {
    const { data } = await axios.get(`${API_BFF_HOST}/v1/app/reverse-geocoding/?lat=${latitude}&lng=${longitude}`);
    return data
  } catch (error) {
    console.log(error.response.status)
    console.log(error.response.data)
    return false
  }
}

export const dislikeService = async (id) => {
  console.log(id)
  try {
    return await axios.post(`${API_SERVICE_HOST}/v1/app/marker-report/dislike`, { id: id });
  } catch (error) {
    console.log(error)
    console.log(error.message)
    return false
  }
}

export const likeService = async (id) => {
  console.log(id)
  try {
    return await axios.post(`${API_SERVICE_HOST}/v1/app/marker-report/like`, { id: id });
  } catch (error) {
    console.log(error)
    console.log(error.message)
    return false
  }
}

export const strikeService = async (id) => {
  console.log(id)
  try {
    return await axios.post(`${API_SERVICE_HOST}/v1/app/marker-report/strike`, { id: id });
  } catch (error) {
    console.log(error)
    console.log(error.message)
    return false
  }
}