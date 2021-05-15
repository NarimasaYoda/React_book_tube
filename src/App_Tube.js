import React, { useState, useEffect } from "react";
import TubeThumb from "./TubeThumb";
import axios from "axios"


let original_url = "https://www.youtube.com/embed/lDK9QqIzhwk"

const KEY = process.env.REACT_APP_X_RAPIDAPI_KEY;

const App_Tube = () => {

    // データを保持するために利用する。
    const [tubeData, setTubeData] = useState([original_url]);
    // // APIにアクセスした情報を保持する。
    // const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=5');


    // 登録する処理 useStateを使ってinput
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const TubeSearch = () => {


        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: inputValue,
                part: 'snippet,id',
                regionCode: 'JP',
                maxResults: '20',
                order: 'date'
            },
            headers: {
                // 'x-rapidapi-key': 'ecd548f525mshb5c4d5c5185d6f3p1f3f55jsndad06aa1f7df',
                'x-rapidapi-key': KEY,
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };

        let url = "";

        axios.request(options).then(function (response) {
            console.log(response.data);
            let num = Math.floor(Math.random() * 20);

            url = "https://www.youtube.com/embed/" + response.data.items[num].id.videoId
            console.log(url)
            setTubeData((currentList) => [...currentList, url])
            // setTubeData(a)
        }).catch(function (error) {
            console.error(error);
        });

        // setTubeData(url)
    }

    return (
        <div className="App mt-4">
            <p className="mt-4">************動画検索************</p>
            <input type="text" onChange={handleInputChange} />
            <button onClick={TubeSearch}>検索</button>


            {tubeData.map((bob) => (
                <TubeThumb
                    src_title={bob}
                    item="none"
                />

            ))}


        </div>
    )
}

export default App_Tube
