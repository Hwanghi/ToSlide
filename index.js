var ch = 0;
var menubar = document.querySelectorAll(".nav-link");
const KorMenu = new Array("청중 질의응답","온라인 강의","온라인 시험","사용 사례","연락처");
const EngMenu = new Array("Audience Q&A", "Online Class","Online Test","Use Cases","Contact");

function change() {
    if (ch == 0) {
        document.querySelector('.nav-button').src="img/eng.png"
        /* document.querySelector('.lecturer').innerHTML = "강사로 참여";
        document.querySelector('.audience').innerHTML = "청중으로 참여";
        document.querySelector('.lecture-id').innerHTML = "강사 ID : 강사 Gmail 계정";

        document.querySelector('.OTUG').innerHTML = "온라인 시험 사용법";
        document.querySelector('.AQUG').innerHTML = "청중 질의응답 사용법";
        document.querySelector('.OCUG').innerHTML = "온라인 강의 사용법"; */

        for(var i=0; i<menubar.length; i++) {
            menubar[i].innerHTML = KorMenu[i];
        }
        ch = 1;
    }
    else {
        document.querySelector('.nav-button').src="img/kor.png"
        /* document.querySelector('.lecturer').innerHTML = "Lecturer";
        document.querySelector('.audience').innerHTML = "Audience";
        document.querySelector('.lecture-id').innerHTML = "Lecturer Id : Google account of the lecturer";

        document.querySelector('.OTUG').innerHTML = "Online Test Tutorial";
        document.querySelector('.AQUG').innerHTML = "Audience Q&A Tutorial";
        document.querySelector('.OCUG').innerHTML = "Online Class Tutorial";
         */
        for(var i=0; i<menubar.length; i++){
            menubar[i].innerHTML = EngMenu[i];
        }
        ch = 0;
    }

}