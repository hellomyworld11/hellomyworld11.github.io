let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hanhanzhu.jpg') {
      myImage.setAttribute('src', 'images/hm.jpg');
    } else {
      myImage.setAttribute('src', 'images/hanhanzhu.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(myName == '')
        myName = '未填写'
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎访问我的网页，' + myName;
  }
  

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎访问我的网页，' + storedName;
}


myButton.onclick = function() {
    setUserName();
 }
 
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });