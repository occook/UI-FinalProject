function setCookie(name,value, count){ //concatenates strings together
  document.cookie=name + count + "=" + escape(value) + "; path=/;"//gets the ASCII version of the  value
  document.cookie=name + 'Current' + "=" + escape(value) + "; path=/;" //overrides the current cookie
}

function getCookie(cname){
  var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie); //reverse of escape
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {//string splits to decode the cookie
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

function helperLogIn(){ //Sets new current cookie on login
  for (var i=0; i<1000; i++){//searches through every cookie to see if the username and passwrd are the same
      if (getCookie('email'+i)===regForm.logInEmail.value && getCookie('psw'+i)===regForm.psw.value){
        setCookie('username', getCookie('username'+i), i);
        setCookie('psw', getCookie('psw'+i), i);
        setCookie('firstName', getCookie('firstName'+i), i);
        setCookie('lastName', getCookie('lastName'+i), i);
        setCookie('email', getCookie('email'+i), i);
        setCookie('birthday', getCookie('birthday'+i), i);
        setCookie('address', getCookie('address'+i), i);
        setCookie('profilePicture', getCookie('profilePicture'+i), i);
        document.html('index.html');
        return;
      }

    }
    alert('Password is incorrect'); //Alerts that password is incorrect
  }
