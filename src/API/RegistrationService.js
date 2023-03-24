import axios from "axios";
import {API_GATEWAYS} from "../utils/const";

export default class RegistrationService {
    /*
    Request body
    Example Value Schema:
    {
      "email": "string",
      "login": "string",
      "password": "string"
    }
    */
    static async postRegistration(json) {
        const response = axios.post(API_GATEWAYS + '/api/auth/register', json,
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