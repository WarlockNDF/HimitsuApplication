import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { END_POINT } from "../constant";

const instance = axios.create({
    baseURL: END_POINT
})

instance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem("@Token");
    config.headers["Authorization"] = `Bearer ${token}`
    return config;
})


export default instance;