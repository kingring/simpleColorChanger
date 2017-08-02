var alphasString = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z',
    alphaArray = alphasString.split(','),
    numberString = '1,2,3,4,5,6,7,8,9,0',
    numberArray = numberString.split(','),
    prefix = '#',
    colorLength = 6,
    newColor = [],
    contentEle = document.querySelector('.content'),
    spanNode = document.createElement('span');
function colorChanger(clr) {
  newColor = [];
  var changer = Math.floor(Math.random() * 6);
  for(var i = 0; i < colorLength; i++) {
    if (changer < 4) {
      var tempNumber = Math.floor(Math.random() * 25);
      newColor.push(alphaArray[tempNumber]);
    } else {
      var tempNumber = Math.floor(Math.random() * 9);
      newColor.push(numberArray[tempNumber]);
    }
  }
  if(!clr) {
    contentEle.style.background = '#'+newColor.join("");
  } else {
    contentEle.style.color = '#'+newColor.join("");
  }
  
  spanNode.innerHTML = '#'+newColor.join("");
  contentEle.appendChild(spanNode);
}
