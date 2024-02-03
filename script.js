const n = ["NO","are you sure?","really sure?","Please!","Don't do this to me","I'm gonna cry!!","you are breaking my heart:("];
var count = 0;
var scale = 25;

function no(){
    count = (count+1)%7;
    scale = scale + 5;
    document.getElementById('no').innerHTML = n[count];
    document.getElementById('yes').style.fontSize = scale+"px";
}

function yes(){
    Email.send({
        SecureToken : "95d91edd-7c37-460c-bf70-3e94bace57c6",
        To : "girendra654singh@gmail.com",
        From : "girendra.singh2003@gmail.com",
        Subject : "It's a Yes",
        Body : "Ladhaki ne haan bol di!!!"
    }).then(
      message => alert("It's a Yes..")
    );
}