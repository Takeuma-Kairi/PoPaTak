const page_url="imgs/pages/"; //ページの場所
const point_url="imgs/points/"; //ポインターの場所

var icons=["pointer1.png","pointer2.png"];  //アイコン、ページ場所の配列
var pages=[
  [1,"opening.png",[[860,330,1,2]]],
  [2,"map1.png",[[30,550,0,1],
                 [920,350,0,1]]]
  ];  //ページ番号、ページ番号、[x, y, アイコン番号, コマンド]

var imadoko = 0;  //ページいまどこにいるか


//アイコン画像を生成する
function make_img(x,y,point_no,cmd){
var ans = '<img src="' +
  point_url + icons[point_no] 
  + '" onclick="clic(' + cmd + ')" ' 
  + 'style="position:absolute;top:' + y + ';left:' + x + ';"/>';
  return(ans);
}


//アイコンをクリックしてページ移動する
//cmdの扱いは今後も考える
function clic(cmd){
  var page_img = document.getElementById("page");
  var icons_div = document.getElementById("icons");
  var title_p = document.getElementById("title");
  
  icons_div.innerHTML = "";
  
  for(var i = 0;i<pages.length;i++){
    if(pages[i][0]==cmd){
      //ページを設定
      page_img.src=page_url + pages[i][1];

      //アイコンを設定
      for(var j=0;j<pages[i][2].length;j++){
        var temp = pages[i][2][j];
        icons_div.innerHTML += make_img(temp[0], temp[1], temp[2], temp[3]);
      }
      
      imadoko = cmd;
      title_p.innerHTML = imadoko;
      break;
    }
  }
}

