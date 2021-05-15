// 記述修正1 useStateを記載、firebaseのdbを取り扱う
import React, { useState, useEffect } from "react";
import { db } from "./firebase";

import "./App.css";
import BookItem from "./BookItem";
import BookThumb from "./BookThumb";

const App_book = () => {
  // 記述3 firebaseのデータをreact側で保持したいので
  // useStateを使って管理します
  const [data, setData] = useState([
    {
      id: "",
      book_title: "",
      b_url: "",
      b_genre_1: "",
      b_genre_2: "",
      b_remarks: "",
    },
  ]);

  // book_title
  // 登録する処理 useStateを使ってinput
  const [inputValue_1, setInputValue_1] = useState("")
  // フォームの入力部分のイベント
  const handleInputChange_1 = (e) => {
    // console.log(e, " event "); //eというのは[event]の省略形で慣習的に「e」と使うことが多いです。
    setInputValue_1(e.target.value);
  }

  // book_url
  // 登録する処理 useStateを使ってinput
  const [inputValue_2, setInputValue_2] = useState("")
  // フォームの入力部分のイベント
  const handleInputChange_2 = (e) => {
    // console.log(e, " event "); //eというのは[event]の省略形で慣習的に「e」と使うことが多いです。
    setInputValue_2(e.target.value);
  }

  // book_genre_1
  // 登録する処理 useStateを使ってinput
  const [inputValue_3, setInputValue_3] = useState("")
  // フォームの入力部分のイベント
  const handleInputChange_3 = (e) => {
    console.log(e, " event "); //eというのは[event]の省略形で慣習的に「e」と使うことが多いです。
    setInputValue_3(e.target.value);
  }

  // book_genre_2
  // 登録する処理 useStateを使ってinput
  const [inputValue_4, setInputValue_4] = useState("")
  // フォームの入力部分のイベント
  const handleInputChange_4 = (e) => {
    console.log(e, " event "); //eというのは[event]の省略形で慣習的に「e」と使うことが多いです。
    setInputValue_4(e.target.value);
  }

  // book_remarks
  // 登録する処理 useStateを使ってinput
  const [inputValue_5, setInputValue_5] = useState("")
  // フォームの入力部分のイベント
  const handleInputChange_5 = (e) => {
    // console.log(e, " event "); //eというのは[event]の省略形で慣習的に「e」と使うことが多いです。
    setInputValue_5(e.target.value);
  }

  // *************************************************************************************
  const addInputChange = () => {
    // firebaseに登録する
    db.collection("group2").add({
      // title: inputValue
      book_title: inputValue_1,
      b_url: inputValue_2,
      b_genre_1: inputValue_3,
      b_genre_2: inputValue_4,
      b_remarks: inputValue_5,
    });
    setInputValue_1("");
    setInputValue_2("");
    setInputValue_3("");
    setInputValue_4("");
    setInputValue_5("");
  }

  // 記述4
  // ページが表示される際にuseEffectを使って実行させる
  useEffect(() => {
    // dbって何？firebaseのデータベースのことを指します
    // importしないといけません！
    const firebaseData = db.collection("group2").onSnapshot((a_snapshot) => {
      // useStateのsetDataで更新をかけます
      setData(
        a_snapshot.docs.map((dbData) => ({
          id: dbData.id,
          book_title: dbData.data().book_title,
          b_url: dbData.data().b_url,
          b_genre_1: dbData.data().b_genre_1,
          b_genre_2: dbData.data().b_genre_2,
          b_remarks: dbData.data().b_remarks,
        }))
      );
    });
    return () => firebaseData();
  }, []);

  // ****************************
  // 打田さん情報
  let book_genre_ary_uchida = [
    "文芸", "小説", "エッセイ", "評論", "詩", "短歌", "俳句", "戯曲"
  ];

  const selectionCreate_1_uchida = (items) => {
    let str = [];
    for (let i = 0; i < items.length; i++) {
      str.push(<input value={items[i]} />);
    }
    return str;
  };
  // console.log(selectionCreate_1_uchida(book_genre_ary_uchida), "str_uchi")

  // 修正、しかしラジオボタンの表示ができない
  // let book_genre_ary = [
  //   ["文芸", "小説", "エッセイ", "評論", "詩", "短歌", "俳句", "戯曲"],
  //   ["実用書", "料理", "育児", "スポーツ", "趣味", "旅行", "地図"],
  //   ["ビジネス書", "経済学", "経営学", "マーケティング", "税務会計", "金融"],
  //   ["児童書", "絵本", "学習図鑑", "学習漫画", "学習用の教材"],
  //   ["学習参考書", "小・中学生の学習参考書", "高校生の学習参考書", "大学受験参考書", "各試験", "各資格取得"],
  //   ["専門書", "医学書", "学術書", "美術書", "アート関連"],
  //   ["コミック・雑誌", "単行本", "月刊雑誌", "週刊雑誌"]
  // ];

  const selectionCreate_1_yoda = (type_name, name, items) => {
    let str = [];
    for (let i = 0; i < items.length; i++) {
      str.push(
        <input type={type_name} name={name} value={items[i][0]} onChange={handleInputChange_3} className={"class_" + i} />);
    }
    return str;
  }
  // console.log(selectionCreate_1_yoda("radio", "b_genre_1", book_genre_ary), "str_y")

  // ***pokemonのときのやり方に習うと*************************

  const [radioValue, setRadioValue] = useState([
    "文芸", "実用書", "ビジネス書", "児童書", "学習参考書", "専門書", "コミック・雑誌", 
  ])

  // console.log(radioValue, "※radioValue")



  
  return (
    <div className="App">
      <p className="mt-4">************FireBase（書籍データ）の利用************</p>
      {/* データの表示をしている箇所 */}


      {/* データを登録する */}
      {/* <input type="text" value={inputValue} onChange={handleInputChange} />
      <button disabled={!inputValue} onClick={addInputChange}>送信ボタン</button> */}
      <p className="mt-4">データ登録</p>
      <span>タイトル:</span><input type="text" value={inputValue_1} onChange={handleInputChange_1} /><br />
      <span>URL:</span><input type="text" value={inputValue_2} onChange={handleInputChange_2} /><br />

      <span>***ジャンル1***</span>
      {/* <input type="radio" name="b_genre_1" value="文芸" onChange={handleInputChange_3} />文芸
          <input type="radio" name="b_genre_1" value="実用書" onChange={handleInputChange_3} />実用書
           */}
      {/* {selectionCreate_1_uchida(book_genre_ary_uchida)} */}
      {/* {selectionCreate_1_yoda("radio", "b_genre_1", book_genre_ary)}<br /> */}

      {radioValue.map((radioValue) => (
        <BookThumb
          name= "b_genre_1"
          item= {radioValue}
          on_change_function={handleInputChange_3}
        />
      ))}

      <span>***ジャンル2***</span><br/>
      <input type="radio" name="b_genre_2" value="超おもしろい" onChange={handleInputChange_4} />超おもしろい
      <input type="radio" name="b_genre_2" value="スーパー感動する" onChange={handleInputChange_4} />スーパー感動する
      <input type="radio" name="b_genre_2" value="元気になるぅぅぅ" onChange={handleInputChange_4} />元気になるぅぅぅ
      <input type="radio" name="b_genre_2" value="高い壁だ" onChange={handleInputChange_4} />高い壁だ      
      <br />

      <span>Remarks:</span><input type="text" value={inputValue_5} onChange={handleInputChange_5} /><br />

      <button disabled={!(inputValue_1 && inputValue_2 && inputValue_3 && inputValue_4 && inputValue_5)} onClick={addInputChange}>書籍登録ボタン</button>

      {data.map((data) => (
        <div>
          {/* <div key={data.id}>{data.title}</div> */}
          {/* mapを使うときは100% KeyをかけとWarningが出るので、<div key={data.id}> という記載が必要 Keyがありなしで見た目は変わらない*/}

          {/* <div>{data.title}</div> */}
          {/* <TaskItem id={data.id} title={data.title}/> */}
          <BookItem key={data.id} id={data.id}
            book_title={data.book_title}
            b_url={data.b_url}
            b_genre_1={data.b_genre_1}
            b_genre_2={data.b_genre_2}
            b_remarks={data.b_remarks} />
        </div>
      ))}
    </div>
  );
};

export default App_book;
