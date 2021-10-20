let count = 1;
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let Max = 19;
let Min = 1;
let timer;
let nowPlaying = false;

function left() {
  count = count-1;
  if(count==0){
    count = Max;
  }
  if(count<=9){
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }
  mainElement.setAttribute('src',URL);
  if(count==Max){
    thumbnailsElement.children[Min-1].classList.remove('selected');
    thumbnailsElement.children[count-1].classList.add('selected');
  }else{
    thumbnailsElement.children[count].classList.remove('selected');
    thumbnailsElement.children[count-1].classList.add('selected');
  }
}

function right() {
  count = count+1;
  if(count==Max+1){
    count = Min;
  }
  if(count<=9){
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }
  mainElement.setAttribute('src',URL);

  if(count==1){
    thumbnailsElement.children[Max-1].classList.remove('selected');
    thumbnailsElement.children[count-1].classList.add('selected');
  }else{
    thumbnailsElement.children[count-2].classList.remove('selected');
    thumbnailsElement.children[count-1].classList.add('selected');
  }
}


function play() {
  if(!nowPlaying){
    nowPlaying = true;
    autoPlay();
  }
}

function autoPlay() {
  right();
  timer = setTimeout(function(){
    autoPlay();
  },1000);
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  thumbnailsElement.children[Min-1].classList.add('selected');
  count = Min;
  mainElement.setAttribute('src',"https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg");
}
