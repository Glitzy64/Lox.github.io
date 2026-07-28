function checkPassword(){

    const pass=document.getElementById("password").value;

    if(pass==="lox"){

        fade("passwordScreen","questionScreen");

    }else{

        document.getElementById("error").innerHTML="Wrong Password 💔";

    }

}

function fade(hide,show){

    document.getElementById(hide).classList.add("hidden");
    document.getElementById(show).classList.remove("hidden");

}

let size=20;

const funny=[
"Are you sure?",
"Really Hannah?",
"Come on...",
"I made this for you",
"Just press YES 😤",
"Eme ka talaga",
"You know you want to",
"Okay..."
];

let count=0;

function growYes(){

    size+=12;

    let yes=document.getElementById("yesBtn");

    yes.style.fontSize=size+"px";
    yes.style.padding=(size/2)+"px";

    document.getElementById("funnyText").innerHTML=
    funny[count%funny.length];

    count++;

}

const message=`It's been more than two weeks, yet you never failed to amaze me. You really are full of surprises. I never regret a thing, especially having the courage to chat you. You are a wonderful person. I hope this won't end and that it will last.

Last week meant so much to me. You came to watch my game, cheered me on, patiently waited for me, and always checked on me. Even when I kept messing things up in so many ways, you never abandoned me. Thank you for that.

I'm sorry we didn't get to do much side quest HAHAHAHAHA, or even eat at nicer places because of my budget. I'm sorry if I'm being "dramatic" sometimes. I'm sorry for waking you up in the middle of the night and for bothering you more times than I can count. I just hope you enjoyed being with me as much as I enjoyed being with you, even though I'm a pain in the ass.

I'll always cherish the little moments we shared—getting drinks, exchanging stories, eating together, watching my game, strolling around Imus and Bacoor, and talking endlessly. Those moments may seem simple, but they meant a lot. :)

Yellow balls, hehehe.

C u wen I c u. ❤️`;

function showMessage(){

    fade("questionScreen","messageScreen");

    const music=document.getElementById("music");

    music.loop=true;
    music.play();

    document.getElementById("photo").classList.add("show");

    typeWriter();

}

let i=0;

function typeWriter(){

    if(i<message.length){

        document.getElementById("message").innerHTML+=message.charAt(i);

        i++;

        setTimeout(typeWriter,28);

    }

}
