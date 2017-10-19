function preloader(){
    document.getElementById('main').style.display="none";
    document.getElementById('preloader').style.display="block";
    setTimeout(function show(){
        document.getElementById('main').style.display="block";
        document.getElementById('preloader').style.display="none";
    }, 3000)
}

function login(){
    if (document.getElementById('email').value === "vishal" && document.getElementById('password').value === 'password'){
        setCookie('loggedin', 'yes');
        document.location.href='../Quora/index.html'
    } else{
        document.getElementById('error2').style.display = 'none'
        document.getElementById('error').style.display = 'block'
    }
}

function checkLogin(){
    if (getCookie('loggedin')===''){
        document.location.href='../Quora/login.html'
    }
    else{
        preloader();
    }
}


function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}