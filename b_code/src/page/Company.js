import React, { useState } from "react";
import "../style/Company.scss";
import ManualStyle from "../style/Manual.module.scss";
import PersonStyle from "../style/Person.module.scss";
const heavyWork = () => {
  console.log("엄청무거운작업");
  return ["후추", "최희윤", "박다윤"];
};
export function Manual() {
  // 한번만 렌더링할수있도록 콜백함수를 넣어줌.
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  //input 상태값 확인
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpload = () => {
    //이전 상태값을 보여주기위하여 콜백함수를 넣어줌.
    setNames((prevState) => {
      console.log("이전 stata값", prevState, text);
      return [text, ...prevState];
    });
  };

  console.log(text, "input값상태");

  return (
    <div className="company_area">
      <h2 className={ManualStyle.title}>Manual</h2>
      <p>Manual 관련 무언가 내용작성</p>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={handleUpload}>Upload</button>
        {/* 현재의 배열의 수량만큼 요소를 반환함 */}
        {names.map((name, idx) => {
          return (
            // 리액트는 꼭 key를 넣어주어야함
            <p key={idx}>
              <b> {name}</b>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export function Person() {
  const [count, setCount] = useState(0); //
  //순서대로 현재값, 업데이트함수, 초기값을 뜻함
  return (
    <div className="company_area">
      <h2 className={PersonStyle.title}>
        Person <span>page</span>
      </h2>
      <p>Person 관련 무언가 내용작성</p>
      <div className={PersonStyle.count}> 수량체크, {count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
export function Rule() {
  return (
    <div className="company_area">
      <h2 className="title">Rule</h2>
      <p>Rule 관련 무언가 내용작성</p>
    </div>
  );
}
export function Etc() {
  return (
    <div className="company_area">
      <h2 className="title">Etc</h2>
      <p>Etc 관련 무언가 내용작성</p>
    </div>
  );
}
