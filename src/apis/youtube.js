
import axios from 'axios';

const KEY = 'AIzaSyCc3GTF4an9skJeTI3uojK7hvdatvYRzP4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxREsults: '5',
        key: KEY 
    }
})