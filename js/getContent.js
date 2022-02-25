const setDiv = (html) => {
  const newDiv = html.querySelector(".content");
  const oldDiv = document.querySelector("main .content");
  const main = document.querySelector("main");
  oldDiv ? main.replaceChild(newDiv, oldDiv) : main.appendChild(newDiv);
};

const getDiv = (menu) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `./main/${menu}.html`);
  xhr.responseType = "document";
  xhr.onload = () => {
    // return 값으로 분리 할 수 있을까
    setDiv(xhr.response);
  };
  xhr.send();
};

const handleClick = (menu) => {
  if (!menu) return;
  getDiv(menu);
};

getDiv("home");
