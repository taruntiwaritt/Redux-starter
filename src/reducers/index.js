import {combineReducers} from 'redux'

const songsReducer = () =>{
    return [
        {title: 'No Scrubs',duration:'4:05'},
        {title: 'Tere liye',duration:'3:35'},
        {title: 'Dhoom Machale',duration:'3:23'},
        {title: 'Makhna',duration:'2:15'}
    ]
}

const selectedSongReducer =(selectedSong=null,action) =>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})