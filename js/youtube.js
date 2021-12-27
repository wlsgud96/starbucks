// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";  //자바스크립트 라이브러리
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { //함수명 바꾸면 안됨
  // <div id="player"></div>
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop:true, //반복 재생 유무
      playlist: 'An6LvWQuj_8'
    },
    //객체 데이터 내부에 함수 데이터가 할당되어있는 함수를 메소드
    events: {
      onReady: function(event){
        event.target.mute() //mute 음소거
      }
    }
  });
}