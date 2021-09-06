const skills1 = [
    {"HTML&CSS":"DOCTYPE을 이해하고 디자인에 맞춰 작업이 가능합니다.<br>또한, name,id,class분류를 알고 있으며, Method에 대한 POST, GET에 대한 원리도 알고 있습니다. <br>Markup, Semantic Web등 다양한 요소를 구성할 수 있으며, 다양한 Rule Set을 활용 각종 media 쿼리를 이용하여 여러가지 Device 제작 경험도 풍부합니다."},
    {"Javascript":"함수, 메소드, 클래스, 프로토타입, 이벤트, 루프 클로져, 디바운싱 등 다양하게 응용이 가능하며 파라미터 데이터 활용과 Back-end와의 작업도 풍부합니다."},
    {"Jquery":"Javascript를 기본으로 하여 DOM, Node에 대한 다양한 활용 프로그램이 가능하며, 웹 속도의 효율을 고려한 Jquery엔진 커스텀을 할 수 있습니다. 배열에 대한 중급 이상의 활용 능력을 가지고 있습니다."},
    {"ECMA":"import와 export를 기본으로 코드를 작성하며, BOM, DOM의 확장성을 활용할 수 있습니다. Class와 Module모두 사용 가능하며, fetch를 이용한 배열 데이터를 활용 할 수 있습니다."},
    {"Ajax":"동기화,비동기화 통신이 가능하며 동적인 화면 출력 및 표시 정보와 상호작용을 할 수 있는 DOM, NODE 모두 사용이 가능합니다.<br>기본적인 통신개념을 알고 있으며, Javascript, Jquery 모두 활용 할 수 있습니다.<br>XML, JSON 파일에 대한 파서 개념도 있으며, send 함수를 통해 데이터 전송도 가능합니다."},
];
const skills2 = [
    {"Vue":"기본 CDN 형태의 Vue를 사용합니다. Template과 Component를 사용할 수 있으며, 인스턴스 생성, 화면 부착, 갱신, 소멸 단계로 구분하여 사용할 수 있습니다. 배열 데이터를 기본으로 화면 렌더링을 하였으며, 각종 이벤트 함수를 응용할 수 있습니다."},
    {"Git":"분산형 관리 시스템을 경험 하였으며, 프로젝트 구성 및 Push, Pull request 같은 이벤트에 반응하여 자동으로 작업(배포 등)을 경험 하였습니다. Git 기본 사용공간은 Public을 기본으로 하였습니다."},
    {"XML & JSON":"태그와 다차원 배열 모두 경험 하였으며, MySQL Database 값에 대한 파싱을 통한 파서 데이터 출력 지식도 습득 하였습니다."},
    {"API":"도로명 주소, 지도, 결제 시스템 등 다양한 API 경험이 있으며, 웹사이트 조건 맞게 커스텀도 가능합니다."},
    {"Responsive Web":"화면 너비에 따라 유동적으로 레이아웃을 변화 시킬 수 있으며, Cross Browsing 기술 플랫폼으로 제작할 수 있습니다."},
    {"Etc":"Visual Studio Code 에디터를 주로 사용하였으며, FTP, SFTP, Host, Webmaster-tools 등 전반적인 웹 지식을 가지고 있습니다.<br>그 외에 관리자 페이지에 대한 적용 원리 지식과 Webmaster도구틀을 이용한 SEO작업도 가능합니다."}
];


/* cursor 이벤트 */
let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll(".mn_menu > li");

window.addEventListener('mousemove',cursor);

function cursor(e){
    //console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

/*
links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
    });
});*/



// main - typing 효과
const typing_text = ["안녕하세요.","프론트엔드 개발자 정윤경입니다."];
var tpCut = typing_text[0].split("");
var txtCounter = 0;
var txtStorage = "";

var typingTimer = setInterval(typingMain,150);
function typingMain(){
    if(txtCounter < typing_text[0].length){ //첫번째줄
        txtStorage = txtStorage + tpCut[txtCounter];
        document.getElementById("main_txt_row1").innerText = txtStorage;
        document.getElementById("main_txt_row1").classList.add("on")
        txtCounter ++;
        
    }else{
        clearInterval(typingTimer);
        document.getElementById("main_txt_row1").classList.remove("on");

        var tpCut2 = typing_text[1].split("");
        var txtCounter2 = 0;
        var txtStorage2 = "";

        var yy = setInterval(typingMain2,150);  
        function typingMain2(){
            if(txtCounter2 < typing_text[1].length){ //두번째줄
                txtStorage2 = txtStorage2 + tpCut2[txtCounter2];
                document.getElementById("main_txt_row2").classList.add("on")
                document.getElementById("main_txt_row2").innerText = txtStorage2;
                txtCounter2++;
            }else{
                clearInterval(yy);
            }
        }
    }
}


var circleBtns = document.getElementsByClassName("circle");

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var wframe = document.querySelector(".whole_frame");
$(function(){
    var $html = $("html");
    var page = 1;
    var $lastPage = $(".whole_frame").length;
    $html.animate({scrollTop:0},2);
    wframe.classList.remove("acitve");

    $(window).on('wheel',function(e){
    //$(window).on("scroll", function(e){
        //mouseCursor.classList.remove("link-grow");
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page == $lastPage) return;
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
            page--;
        }
        var posTop = (page-1) * $(window).height();
        $html.animate({scrollTop : posTop});

        for(var p=0; p<4; p++){
            if(page == (p+1)){
                circleBtns[p].classList.add("bounce")
                document.getElementById("sec"+p).classList.add("on")
            }else{
                document.getElementById("sec"+p).classList.remove("on")
            }
        }

    });

    
    $("#mn_menu > li").click(function(){
        var $eaHeight = $("#sec0").height();
        var $thisLi = $(this).index();

        $("html,body").animate({
            "scrollTop":($eaHeight * $thisLi)+ "px"
        }, 700);

        for(var $u=0; $u<4; $u++){
            $("#sec"+$u).removeClass("on");
        }
        $("#sec"+$thisLi).addClass("on");

        $("#mobile_mns").hide(100);
    });

    $("#btn_go_down").click(function(){
        var $offset = $("#sec1").offset().top;
        console.log($offset)
        $("html,body").animate({
            "scrollTop":$offset+ "px"
        }, 700);

        $(".whole_frame").removeClass("on")
        $("#sec1").addClass("on");

        $("#btn_go_down").css("z-index","47");
    })

    
    $.fn.moveSec2 = function(){
        var $offset = $("#sec3").offset().top;
        $("html,body").animate({
            "scrollTop":$offset+ "px"
        }, 700);

        $(".whole_frame").removeClass("on")
        $("#sec3").addClass("on");
        //$("#btn_go_down").css("z-index","47");
    }

})



//document.getElementById("btn_mobile_menu").addEventListener("click",showMobileMenu);


var li = "";
Object.keys(skills1).forEach(function(a1,a2,a3){
    Object.keys(skills1[a1]).forEach(function(b1,b2,b3){
        li = li + '<li title="'+b1+'">\
            <p class="skills_inner_tit">'+b1+'</p>\
            <div class="skills_cont">\
                '+skills1[a1][b1]+'</div>\
        </li>';
    })
});
document.getElementById("skills_list1").innerHTML = li;

var li2 = "";
Object.keys(skills2).forEach(function(a1,a2,a3){
    Object.keys(skills2[a1]).forEach(function(b1,b2,b3){
        li2 = li2 + '<li title="'+b1+'">\
            <p class="skills_inner_tit">'+b1+'</p>\
            <div class="skills_cont">\
                '+skills2[a1][b1]+'</div>\
        </li>';
    })
});
document.getElementById("skills_list2").innerHTML = li2;


var acc_btns = document.getElementsByClassName("skills_inner_tit");
for (var i = 0; i < acc_btns.length; i++) {
    acc_btns[i].onclick = function() {	 
        // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리게)
        for (var j = 0 ; j<acc_btns.length; j++){
        // 버튼 상태에 입혀진 active 라는 클래스를 지운다.
            acc_btns[j].classList.remove("active");
        // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
            if (this!==acc_btns[j]) {
                acc_btns[j].nextElementSibling.style.maxHeight = null;
            }
        }
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            this.classList.remove("active");
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

/* 02. skills */ 
var skillOlWidth = document.getElementById("skill_layout_r").clientWidth;
document.getElementById("skill_wrapper").style.width = (skillOlWidth * 2) + "px";
document.getElementById("skills_list1").style.width = skillOlWidth +"px";
document.getElementById("skills_list2").style.width = skillOlWidth +"px";

var sliderChk = 0;
function moveSkills(){
    if(sliderChk == 0){
        document.getElementById("skill_wrapper").style.left = "-100%";
        //document.querySelectorAll(".skills_cont").max
        sliderChk++;
    }else if(sliderChk == 1){
        document.getElementById("skill_wrapper").style.left = "0%";
        sliderChk++;
    }else if(sliderChk == 2){
        //document.getElementById("skill_wrapper").style.left = "0%";
        var $offset = $("#sec2").offset().top;
        console.log($offset)
        $("html,body").animate({
            "scrollTop":$offset+ "px"
        }, 700);

        $(".whole_frame").removeClass("on")
        $("#sec2").addClass("on");
    }
}
document.getElementById("btn_skill_more").addEventListener("click",moveSkills);



/* 03. project */ 
var pmn_btns = document.getElementsByClassName("pmn_li");
var prjLiLength = document.querySelectorAll(".project_list li").length;

function showLi(num){
    for(var v =0; v<prjLiLength; v++){
        pmn_btns[v].classList.remove("on")
        document.getElementById("li"+v).style.display = "none";
        document.getElementById("li"+num).style.display = "flex";
    }
    pmn_btns[num].classList.toggle("on")
}

function movePrj(thisLinks,dtype){
    if(dtype == 1){
        window.open(thisLinks);
    }else if(dtype == 2){
        window.open(thisLinks,"","width=360,height=600,scrollbars=yes,resizable=yes");
    }
}

var prdIndexNum = 0;
function nextProject(prjIndex){
    if(prdIndexNum < prjLiLength-1){
        for(var v =0; v<prjLiLength; v++){
            pmn_btns[v].classList.remove("on")
            document.getElementById("li"+v).style.display = "none";
        }
        prdIndexNum = prdIndexNum + 1;
        document.getElementById("prj_mn").children[prdIndexNum].classList.add("on");
        document.getElementById("li"+prdIndexNum).style.display = "flex";
        console.log(prdIndexNum)
    }else if(prdIndexNum = 9){
        $.fn.moveSec2();
    }
}



/* 04. contact us */
function sendEmail(){
    if(sendforme.pernm.value == ""){
        alert("성함을 입력해주세요.");
        sendforme.pernm.focus();
        return false;
    }else if(sendforme.pertel.value == ""){
        alert("연락처를 입력해주세요.");
        sendforme.pertel.focus();
        return false;
    }else if(sendforme.peremail.value == ""){
        alert("이메일을 입력해주세요.");
        sendforme.peremail.focus();
        return false;
    }else if(sendforme.pertext.value == ""){
        alert("내용을 입력해주세요.");
        sendforme.pertext.focus();
        return false;
    }else{
        sendforme.method = "POST";
        sendforme.enctype = "application/x-www-form-urlencoded";
        sendforme.action = "./mailto.php";
        sendforme.submit();
    }
}

function pesonalLinks(alinks){
    if(alinks == 0){
        window.open("https://github.com/notfreshmilk/front")
    }else if(alinks == 1){
        alert("준비중입니다.")
    }
    
}



