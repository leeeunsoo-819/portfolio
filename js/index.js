document.addEventListener("DOMContentLoaded",function(){

    //메뉴
    let btnMenu = document.querySelector(".btnMenu")
    let hiddenGnb = document.querySelector(".hiddenGnb")
    let btnClose = document.querySelector(".btnClose")

    btnMenu.addEventListener("click",function(){
        hiddenGnb.classList.add("on")
    })

    btnClose.addEventListener("click",function(){
        hiddenGnb.classList.remove("on")
    })

    //히든 메뉴 클릭시 메뉴 나가기
    let gnb = document.querySelector(".gnb")
    let gnb_li = gnb.children

    for(let i=0 ; i<gnb_li.length ; i++){
        gnb_li[i].addEventListener("click",function(){
            hiddenGnb.classList.remove("on")
        })
    }





    // color 채워지는 소스
    let colordd = document.querySelectorAll("dd[data-color]")//data-color 속성이 명시되어있는 dd태그 선택
    colordd.forEach(function(ddtag){
        let orcon = ddtag.textContent
        ddtag.innerHTML = `<span style="background-color:${orcon}"></span>${orcon}`
    })



    



    //컨텍트 글자 위~
        const path_array = document.querySelectorAll("#Layer_1 path")

    let termOfPath = 0.08
    setTimeout(function(){
        path_array.forEach(function(path,idx){
            path.style.transition = `
            stroke-dashoffset 1s ease ${idx*termOfPath}s,
            fill 1s ease ${idx*termOfPath+1}s
            `
        })
    },100)

    path_array.forEach(path=>{
        let path_length = path.getTotalLength()
        path.style.strokeDasharray = path_length
        path.style.strokeDashoffset = path_length
    })


    // IntersectionObserver 생성: 요소가 화면에 들어오고 나가는 것을 감지
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // 요소가 화면에 보이면 show 클래스 추가
            entry.target.classList.add('on');
            } else {
            // 요소가 화면에서 벗어나면 show 클래스 제거
            entry.target.classList.remove('on');
            }
        });
        }, {
        threshold: 0.1 // 요소가 10% 이상 보일 때 트리거
        });

        // 모든 section 요소에 observer 적용
        document.querySelectorAll('.txtAni').forEach(section => {
            observer.observe(section);
        });



    
    
})