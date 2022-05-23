import axios from "axios";

export const register = async (user) => await axios.post(`${process.env.REACT_APP_API}/register`,user);
export const login = async (user) => await axios.post(`${process.env.REACT_APP_API}/login`,user);

export const therapistlogin = async (user) => await axios.post(`${process.env.REACT_APP_API}/therapist-login`,user);

export const therapistDetail= async (user) => await axios.get(`${process.env.REACT_APP_API}/therapist`,user);

export const therapistSchedule= async (id) => await axios.post(`${process.env.REACT_APP_API}/schedule-therapist`,id);