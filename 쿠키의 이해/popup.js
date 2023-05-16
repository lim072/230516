/*
쿠키 : 사용자의 컴퓨터에 저장되는 정보를 뜻합니다
정보가 발생하면 두군데에 저장되는 경향이 있습니다.
클라이언트와 서버에 저장됩니다.
서버에 저장되는 정보 : 쿠키, 세션
클라이언트에 저장되는 정보 : 쿠키

쿠키이름 = 쿠키캆
벨류값은 알수없음
path(페스) = 경로 /" 
expires 유효날짜(삭제될 날짜)(만료일)
*/

let popup = document.querySelector("#popup")
let btnClose = popup.querySelector(".close")
let btnDel = document.querySelector(".del")
let btnView = document.querySelector(".view")

const isCookie = document.cookie.indexOf("today=done")
//indexOf 찾을때 존재하면 존재하는 인덱스를 반환하고,
//존재하지않으면 -1(고정값)을 반환한다

//쿠키가 있다면 쿠키팝업을 보이지 않고, 없다면 계속해서 쿠키팝업을 띄어주는 코드

if(isCookie == -1){
    //쿠키가 없으므로 팝업을 계속 보이게 하고
    popup.style.display = "block";
}else{
    //쿠키가 있으므로 팝업을 숨기는 것
    popup.style.display = "none";    
}
btnDel.addEventListener("click",(e)=> {
    e.preventDefault();
    //쿠키를 지운다는 것은 만료일을 지금으로 혹은 due값을 조정해서 만료일을 앞당기는 것입니다
    setCookie("today","done", 0)
})


btnClose.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let isChecked = popup.querySelector("input[type=checkbox]").checked;
    if(isChecked){
        setCookie("today","done", 1)
    }

    popup.style.display = "none";
})

//쿠키를 셋팅하는 함수
function setCookie(name,value,due){
    let today = new Date();
    let date = today.getDate();
    today.setDate(date + due);

    let duedate = today.toGMTString();
    //toGMTString 시간출력
    document.cookie = `${name}=${value}; path="/"; expires=${duedate}`;
}

