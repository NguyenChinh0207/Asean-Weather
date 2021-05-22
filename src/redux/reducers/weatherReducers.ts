import { WeatherActionTypes } from "../actionTypes/weatherTypes"
interface IAction {
    type: string;
    payload?: any;
}

interface IState {
    success: boolean;
    loading: boolean;
    loaded: boolean;
    load:boolean;
    error: string;
    data: any;
    weather: any[],
    weatherHourly:any[],
    weatherDaily:any[],
    astro:any[],
    location:[]
}

const initalState:IState = {
    success: false,
    loading: false,
    loaded: false,
    load:false,
    error: '',
    data: {},
    weather: [] ,
    weatherHourly:[],
    weatherDaily:[],
    astro:[],
    location:[]
}

export const weatherReducer = (state = initalState, action:IAction) => {
    switch(action.type){
        case WeatherActionTypes.GET_WEATHER_NOW_SUCCESS: {
            return {
                ...state,
                success: true,
                weather: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_NOW_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_HOURLY_SUCCESS: {
            return {
                ...state,
                loading: true,
                weatherHourly: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_HOURLY_FAIL: {
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_DAILY_SUCCESS: {
            return {
                ...state,
                loaded: true,
                weatherDaily: action.payload
            }
        }
        case WeatherActionTypes.GET_WEATHER_DAILY_FAIL: {
            return {
                ...state,
                loaded: true,
                error: action.payload
            }
        }
        
        case WeatherActionTypes.SEARCH_WEATHER_SUCCESS: {
            return {
                ...state,
                success: true,
                location: action.payload
            }
        }
        case WeatherActionTypes.SEARCH_WEATHER_FAIL: {
            return {
                ...state,
                success: true,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}