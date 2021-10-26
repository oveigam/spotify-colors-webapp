import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        isReady: false,
        isPlaying: false,
        queue: []
    },
    reducers: {
        setReady: (state) => {
            state.isReady = true
        },
        changeQueue: (state, { payload: queue }) => {
            state.queue = [queue]
            state.isPlaying = true
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
        changePlayingStatus: (state, { payload: playingStatus }) => {
            state.isPlaying = playingStatus
        }
    }
})

export const { setReady, changeQueue, play, pause, changePlayingStatus } = playerSlice.actions

export default playerSlice.reducer