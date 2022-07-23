const page_url="imgs/pages/"; //ページの場所
const point_url="imgs/points/"; //ポインターの場所

//アイコン名と、それの半径
var icons=[["pointer1.png",15],["pointer2.png",50]];  

//ページの配列
//ページ番号、ページ番号、[x, y, アイコン番号, コマンド]
var pages=[
  [1,"opening.png",[[910,380,1,2]]],
  [2,"map1.png",[[45,565,0,1],
                 [935,365,0,1]]]
  ];  

var imadoko = 0;  //ページいまどこにいるか


//アイコン画像を生成する
function make_img(x,y,point_no,cmd){
var ans = '<img src="' +
  point_url + icons[point_no][0]
  + '" onclick="clic(' + cmd + ')" ' 
  + 'style="position:absolute;top:' + (y - icons[point_no][1])
  + ';left:' + (x - icons[point_no][1]) + ';"/>';
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

