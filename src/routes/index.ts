
const LOCAL_GATEWAY = "http://localhost:8000";
const REMOTE_GATEWAY = "http://77.246.158.84:8000";

const GATEWAY = REMOTE_GATEWAY;

export const API_ROUTES = {
    login: `${GATEWAY}/login`,
    logout: `${GATEWAY}/logout`,
    cinemas: `${GATEWAY}/api1/v1/cinemas`,
    movies: `${GATEWAY}/api1/v1/film`,
    users: `${GATEWAY}/api1/v1/movieUser`,
    feedbacks: `${GATEWAY}/api1/v1/feedback`,
    register: `${GATEWAY}/register`,
    sessions: `${GATEWAY}/api1/v1/session`
}
