import useSWR from "swr";

import callApi from "./callApi";

const useAuth = () => {
    const {data, error} = useSWR('user_me', () => {
        return callApi().post('auth');
    })
    return {user: data, error, loading: !data && !error}
}

export default useAuth;