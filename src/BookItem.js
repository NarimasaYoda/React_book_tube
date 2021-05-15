import React from 'react'

// 記述➀ dbをインポートする
import {db} from "./firebase"

// propsでidとタイトルを上から渡して、このTaskItemで受け取れるようにします。
// 記述➁
const BookItem = ({id,book_title,b_url,b_genre_1,b_genre_2,b_remarks}) => {

// 記述➄削除する処理を記述し、押されたら、データを削除する
    const deleteInputData = () =>{
        // 記述➅dbにアクセスして、該当するデータを消す処理を記述する。
        db.collection("group2").doc(id).delete();        
    }

    return (
        <div>
            {/* 記述➂firebaseに登録されたタイトルを表示 */}
            <div>{book_title},{b_url},{b_genre_1},{b_genre_2},{b_remarks}</div>
            
            {/* 記述➃削除ボタンの作成 */}
            <button onClick={deleteInputData}>削除</button>
        </div>

    )
}

export default BookItem
