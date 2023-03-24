import axios from "axios";
import {API_GATEWAYS} from "../utils/const";

export default class RoleService {
    static async getRole(token) {
        const response = axios.get(API_GATEWAYS + '/api/auth/role',
            {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
                    'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
                }
            })
        return response;
    }

}