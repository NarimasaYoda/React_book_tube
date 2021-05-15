// 記述修正1 useStateを記載、firebaseのdbを取り扱う
import React, { useState, useEffect } from "react";
import { db } from "./firebase";

import "./App.css";
import TaskItem from "./TaskItem";

const App_data = () => {
  // 記述3 firebaseのデータをreact側で保持したいので
  // useStateを使って管理します
  const [data, setData] = useState([
    {
      id: "",
      title: "",
    },
  ]);

  // 登録する処理 useStateを使ってinput
  const [inputValue, setInputValue] = useState("")

  // フォームの入力部分のイベント
  const handleInputChange = (event) => {
    console.log(event, " event "); //eというのは[event]の省略形で慣習的に「e」と使うことが多いです。eventという表記で作ってみた。
    console.log(event.target.value, " event_tv ");
    console.log(event.nativeEvent.data, " event_nd ");

    // setInputValue(e.target.value);
    setInputValue(event.nativeEvent.data);
  }

  const addInputChange = () => {
    // alert(inputValue);
    // firebaseに登録する
    db.collection("group").add({ title: inputValue });
    setInputValue("");
  }

  // 記述4
  // ページが表示される際にuseEffectを使って実行させる
  useEffect(() => {
    // dbって何？firebaseのデータベースのことを指します
    // importしないといけません！
    const firebaseData = db.collection("group").onSnapshot((aaa_snapshot) => {
      // useStateのsetDataで更新をかけます
      setData(
        aaa_snapshot.docs.map((dbData) => ({
          id: dbData.id,
          title: dbData.data().title,
        }))
      );
    });
    return () => firebaseData();
  }, []);


  return (
    <div className="App">
      <p className="mt-4">************FireBaseの利用************</p>
      {/* データを登録する */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button disabled={!inputValue} onClick={addInputChange}>送信ボタン</button>

      {/* データの表示をしている箇所 */}
      {data.map((data) => (
        <div>
          {/* <div key={data.id}>{data.title}</div> */}
          {/* mapを使うときは100% KeyをかけとWarningが出るので、<div key={data.id}> という記載が必要 Keyがありなしで見た目は変わらない*/}

          {/* <div>{data.title}</div> */}
          {/* <TaskItem id={data.id} title={data.title}/> */}
          <TaskItem key={data.id} id={data.id} title={data.title}/>
        </div>
      ))}

    </div>
  );
};

export default App_data;
