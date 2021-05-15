import React, { useState } from "react";

import "./App.css";
import RadioButtonThumb from "./RadioButtonThumb";

const App_RadioButton = () => {
  // firebaseのデータをreact側で保持したいのでuseStateを使って管理
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

  // 登録する処理 useStateを使ってinput
  const [inputValue_1, setInputValue_1] = useState("")
  // フォームの入力部分のイベント
  const handleInputChange_1 = (e) => {
    setInputValue_1(e.target.value);
  }

  // ****************************
  const [radioValue, setRadioValue] = useState([
    "文芸", "小説", "エッセイ", "評論", "詩", "短歌", "俳句", "戯曲"
  ])

  const selectionCreate_1 = (type_name, name, items) => {
    let str = [];
    for (let i = 0; i < items.length; i++) {
      str.push(
        <input type={type_name} name={name} value={items[i]} onChange={handleInputChange_1} className={"class_" + i} />);
    }
    return str;
  };
  console.log(selectionCreate_1("radio", "b_genre_1", radioValue), "※html")
  console.log(radioValue, "※radioValue")

  return (
    <div>
      <p className="mt-4">************RadioButton設定************</p>
      <p>******pokemon アプリと同じような方法******</p>
      {radioValue.map((bob_marley) => (
        <RadioButtonThumb
          type="radio"
          // type="checkbox"
          name="b_genre_1"
          item={bob_marley}
          on_change_function={handleInputChange_1}
        />
      ))}

      <p>******htmlタグとして出力する関数を用意し、jsxのreturnで読み込む******</p>
      <p>******これではラジオボタンのアイテムの表示ができない******</p>
      {selectionCreate_1("radio", "b_genre_1", radioValue)}<br />
      {selectionCreate_1("checkbox", "b_genre_1", radioValue)}<br />
    </div>
  );
};

export default App_RadioButton;
