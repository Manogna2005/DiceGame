var x=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var x1=0;
function fun(){
    x1=Math.floor(Math.random()*x.length);
    document.querySelector(".img1").setAttribute("src",x[x1]);
}
function fun1(){
    var x2=Math.floor(Math.random()*x.length);
    document.querySelector(".img2").setAttribute("src",x[x2]);
    if(x1>x2){
        document.querySelector(".result").textContent="Player 1 Won😄";
    }else if(x1==x2){
        document.querySelector(".result").textContent="Hey!! It's a tie🤝";
    }else{
        document.querySelector(".result").textContent="Player 2 Won👏";
    }
}