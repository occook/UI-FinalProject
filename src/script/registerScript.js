function helperRegister(){  //gets the registerFile form and puts it into storeValues
  var el = document.getElementById('registerFile');
  storeValues(el);

}
function storeValues(form){ //this form puts the values in the cookie when you register
  var count = 0; //sets the base
  var add = true;
    while (count<1000){
    if (regForm.email.value === getCookie('email'+count)){ //If email already exists.
      alert('You are already registered');
      add = false; //Do not add new cookie because it already exists
      break;
      }
    if (getCookie('email'+count) === ""){ //Add cookie in first empty slot
      break;
    }
      count++; //Iterate up, we haven't found a blank spot, nor a matching cookie.
    }
    if (add){ //Puts all of the information into a cookie
        setCookie('username', regForm.username.value, count);
        setCookie('psw', regForm.psw.value, count);
        setCookie('email', regForm.email.value, count);
        setCookie('birthday', regForm.birthday.value, count);
        setCookie('profilePicture', regForm.profilePicture.value, count);

        console.log(5);
      }
      return true;
    }
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
