import axios from "axios";
import {API_GATEWAYS} from "../utils/const";

export default class AuthenticationService {
    static async postAuthentication(json) {
        const response = axios.post(API_GATEWAYS + '/api/auth/token', json,
            {
                headers: {
                    'Accept': '*/*',
                    "Content-Type" : "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                    'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
                }
            })
        return response;
    }

}