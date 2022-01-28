const heavyWork = () => {
  console.log("엄청무거운작업");
  return ["최연우", "최희윤"];
};

export function Manual() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 stata값", prevState);
      return [text, ...prevState];
    });
  };

  console.log(text, "input상태");

  return (
    <div className="company_area">
      <h2 className={ManualStyle.title}>Manual</h2>
      <p>Manual 관련 무언가 내용작성</p>
      <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={handleUpload}>Upload</button>/
        {names.map((name, idx) => {
          return (
            <p key={idx}>
              <b> {name}</b>
            </p>
          );
        })}
      </div>
    </div>
  );
}
