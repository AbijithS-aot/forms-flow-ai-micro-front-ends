import { WEB_BASE_URL } from "./config";

const API = {
    GET_DASHBOARDS: `${WEB_BASE_URL}/dashboards`,
    GET_GROUPS: `${WEB_BASE_URL}/groups`,
    GET_ROLES: `${WEB_BASE_URL}/roles`,
    GET_USERS: `${WEB_BASE_URL}/user`,
    DASHBOARD_AUTHORIZATION: `${WEB_BASE_URL}/authorizations/dashboard`,
}

export default API;