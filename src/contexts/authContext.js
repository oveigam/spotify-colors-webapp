import axios from "axios";
import dayjs from "dayjs";
import { useCallback } from "react";
import { createContext, useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";

const authContext = createContext()
export default authContext;

export const AuthProvider = ({ children }) => {
    const spotify = useSpotify()

    const [accessToken, _setAccessToken] = useState(localStorage.getItem("accessToken"))
    const [refreshToken, _setRefreshToken] = useState(localStorage.getItem("refreshToken"))
    const [expirationDate, _setExpirationDate] = useState(localStorage.getItem("expirationDate"))

    const setAccessToken = useCallback((token) => {
        localStorage.setItem("accessToken", token)
        _setAccessToken(token)
    }, [_setAccessToken])

    const setRefreshToken = useCallback((token) => {
        localStorage.setItem("refreshToken", token)
        _setRefreshToken(token)
    }, [_setRefreshToken])

    const setExpirationDate = useCallback((expiresIn) => {
        const date = dayjs().add(expiresIn - 60, 'second')
        localStorage.setItem("expirationDate", date)
        _setExpirationDate(date)
    }, [_setExpirationDate])

    const refreshAuthorization = useCallback((refreshToken) => {
        axios.post('/auth/refresh', { refreshToken })
            .then((res) => {
                setAccessToken(res.data.accessToken)
                setExpirationDate(res.data.expiresIn)
            })
            .catch((err) => {
                setAccessToken(null)
                setExpirationDate(null)
                console.log(err)
                // window.location = '/'
            })
    }, [setAccessToken, setExpirationDate])

    const code = new URLSearchParams(window.location.search).get('code')

    useEffect(() => {
        if (code) {
            axios.post('/auth/login', { code })
                .then((res) => {
                    window.history.pushState({}, null, "/")
                    setAccessToken(res.data.accessToken)
                    setRefreshToken(res.data.refreshToken)
                    setExpirationDate(res.data.expiresIn)
                })
                .catch((err) => {
                    setAccessToken(null)
                    setExpirationDate(null)
                    console.error(err)
                    // window.location = '/'
                })
        }
    }, [code, setAccessToken, setRefreshToken, setExpirationDate])

    useEffect(() => {
        spotify.setAccessToken(accessToken)
    }, [accessToken, spotify])

    useEffect(() => {
        if (refreshToken) {
            refreshAuthorization(refreshToken)
        }
    }, [refreshToken, refreshAuthorization])

    useEffect(() => {
        if (dayjs().isBefore(expirationDate) && refreshToken) {
            const timeout = setTimeout(() => {
                refreshAuthorization(refreshToken)
            }, dayjs(expirationDate).diff(dayjs()))

            return () => clearTimeout(timeout)
        }
    }, [expirationDate, refreshToken, refreshAuthorization])

    return (
        <authContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, expirationDate, setExpirationDate }}>
            {children}
        </authContext.Provider>
    );
}