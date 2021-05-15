import React from 'react'

// 記述➀ dbをインポートする
import {db} from "./firebase"

// propsでidとタイトルを上から渡して、このTaskItemで受け取れるようにします。
// 記述➁
const TaskItem = ({id,title}) => {

// 記述➄削除する処理を記述し、押されたら、データを削除する
    const deleteInputData = () =>{
        // 記述➅dbにアクセスして、該当するデータを消す処理を記述する。
        db.collection("group").doc(id).delete();        
    }

    return (
        <div>
            {/* 記述➂firebaseに登録されたタイトルを表示 */}
            <div>{title}</div>
            
            {/* 記述➃削除ボタンの作成 */}
            <button onClick={deleteInputData}>削除</button>
        </div>

    )
}

export default TaskItem
