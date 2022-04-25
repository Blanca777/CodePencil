// 播放
let play_state = true;
const playWrapper = document.getElementById('playWrapper')
const play_open = document.getElementsByClassName('play_open')[0];
const play_close = document.getElementsByClassName('play_close')[0];
playWrapper.addEventListener('click', function(){
  console.log('123')
  if(play_state){
    play_open.classList = 'play_open play_show'
    play_close.classList = 'play_close'
  }else{
    play_open.classList = 'play_open'
    play_close.classList = 'play_close play_show'
  }
  play_state = !play_state
})
//字幕
let subtitle_state = true;
const subtitleContent = document.getElementById('subtitleContent');
const subtitle_fontAtOpen = document.getElementsByClassName('subtitle_fontAtOpen')[0];
const subtitle_fontAtClose = document.getElementsByClassName('subtitle_fontAtClose')[0];
const subtitle_line = document.getElementsByClassName('subtitle_line')[0];
subtitleContent.addEventListener('click', function () {
  if (subtitle_state) {
    subtitle_line.classList = 'subtitle_line subtitle_showline';
    // line.style.display = 'inline-block';
    subtitle_fontAtOpen.style.display = 'none';
    subtitle_fontAtClose.style.display = 'inline-block';
  } else {
    subtitle_line.classList = 'subtitle_line';
    // line.style.display = 'none';
    subtitle_fontAtOpen.style.display = 'inline-block';
    subtitle_fontAtClose.style.display = 'none';
  }
  subtitle_state = !subtitle_state;
});
