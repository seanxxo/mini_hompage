const getTextFile = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "text/plain";
  input.onchange = (e) => {
    const inputFile = e.target.files[0];
    if (inputFile.type != "text/plain") {
      console.log(".txt만 첨부 가능");
      return;
    }
    date = processDate(inputFile.lastModifiedDate);
    processFile(inputFile);
  };
  input.click();
};

const processFile = (file) => {
  const reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = () => {
    showSecret(date, reader.result);
  };
};

Date.prototype.getDayStr = function () {
  switch (this.getDay()) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
};

Date.prototype.getMonthStr = function () {
  return this.getMonth() + 1 < 10
    ? `0${this.getMonth() + 1}`
    : this.getMonth() + 1;
};

const processDate = (dateObj) => {
  return `${dateObj.getFullYear()}.${dateObj.getMonthStr()}.${dateObj.getDate()} ${dateObj.getDayStr()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
};

const showSecret = (date, content) => {
  $secretLi = document.querySelector(`.diary > ul > li:last-child`);
  $secretLi.querySelector("div:first-child").innerText = date;
  $secretLi.querySelector("div:last-child").innerText = content;
  $secretLi.previousElementSibling.style = "display:none";
  $secretLi.style = "display:block";
};

let date;
let content;

const handleButtonClick = () => {
  getTextFile();
};
