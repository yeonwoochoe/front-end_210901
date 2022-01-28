import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
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
      // console.log("이전 stata값", prevState, text);
      return [text, ...prevState];
    });
  };

  // console.log(text, "input값상태");

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
  const countRef = useRef(0);
  console.log("나는 계속 렌더링중...");

  const upCounstState = () => {
    setCount(count + 1);
  };

  const upCounstRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="company_area">
      <h2 className={PersonStyle.title}>
        UseRef <span>예제</span>
      </h2>
      <p>ref는 어떻게 다를까?</p>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={upCounstState}>state up</button>
      <button onClick={upCounstRef}>Ref up</button>
    </div>
  );
}

export function Rule() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 카운터 수:", renderCount.current);
  });

  return (
    <div className="company_area">
      <h2 className="title">useRef</h2>
      <p>useRef로 렌더링 카운트하기</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  );
}

export function Etc() {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  });

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  return (
    <div className="company_area">
      <h2 className="title">dom의 접근하기</h2>
      <input ref={inputRef} type="text" placeholder="이름을 임력하세요" />
      <button onClick={login}>로그인</button>
    </div>
  );
}
