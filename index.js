function fun(){
    // username

    uname=document.getElementById("uname").value;

    // empty 

    if(uname==""){
        document.getElementById("umsg").innerHTML="Please enter username.."
        return false;
    }
    
    // number not allow

    flag = 0;
      for (let i = 0; i < uname.length; i++) {
        if (uname.charCodeAt(i) >= 48 && uname.charCodeAt(i) <= 57) {
          flag = 1;
        }
      }
      if (flag == 1) {
        document.getElementById("umsg").innerHTML="Number not allowed.."
        return false;
      }else{
        document.getElementById("umsg").innerHTML=""
    }
/*---Password----*/
pass = document.getElementById("pass").value;

/* empty*/

if (pass == "") {
    document.getElementById("pmsg").innerHTML= "Please enter password...";
  return false;
}

/* length*/

if (pass.length != 8) {
    document.getElementById("pmsg").innerHTML= "Length must be 8..";
  return false;
}

/* uppercase*/

count = 0;
for (i = 0; i < pass.length; i++) {
  if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) {
    count = 1;
  }
}
if (count == 0) {
  document.getElementById("pmsg").innerHTML="one letter should be upper case..";
  return false;
}

/* at least one number */

flag = 0;
for (let i = 0; i < pass.length; i++) {
  if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
    flag = 1;
  }
}
if (flag == 0) {
    document.getElementById("pmsg").innerHTML="One number important";
  return false;
}

/* special character */
flag = 0;
for (let i = 0; i < pass.length; i++) { 
  if (
    (pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 47) ||
    pass.charCodeAt(i) == 64
  ) {
    flag = 1;
  }
}
if (flag == 0) {
    document.getElementById("pmsg").innerHTML="One special character imp";
  return false;
}else{
  document.getElementById("pmsg").innerHTML=""
}

/* ---confirm Password----*/

cpass = document.getElementById("cpass").value;

if (pass != cpass) {
  document.getElementById("cmsg").innerHTML="password and confirm password not match";
  return false;
}else{
  document.getElementById("cmsg").innerHTML=""
}

 /*---mobile number---*/
 mobile = document.getElementById("mobile").value;
 /* empty*/

 if (mobile == "") {
  document.getElementById("mno").innerHTML="Please enter mobile number...";
   return false;
 }

 /* only number */
 flag = 0;
 for (let i = 0; i < mobile.length; i++) {
   if (mobile.charCodeAt(i) >= 48 && mobile.charCodeAt(i) <= 57){
     flag = 1;
   }
 }
 if (flag == 0) {
  document.getElementById("mno").innerHTML="Only numbers";
   return false;
 }

 /* length mobile no */

 if (mobile.length != 10) {
  document.getElementById("mno").innerHTML= "length must be 10";
   return false;
 }

 /* start with 6 7 8 9 */

 flag = 0;
 if (
   mobile[0] == 6 ||
   mobile[0] == 7 ||
   mobile[0] == 8 ||
   mobile[0] == 9
 ) {
   flag = 1;
 }

 if (flag == 0) {
  document.getElementById("mno").innerHTML= " mobile number start with 6,7,8,9 .....";
   return false;
 }else{
  document.getElementById("mno").innerHTML=""
}

 /*--------Email------*/
 email=document.getElementById("email").value

 /* empty*/

 if (email == "") {
  document.getElementById("emsg").innerHTML="Please enter email...";
  return false;
}

/* @ sign mandatory */
flag=0
for(let i=0;i<email.length;i++){
  if(email.charCodeAt(i)==64){
    flag++
  }

}
if(flag==0){
  document.getElementById("emsg").innerHTML="please enter @ sign.."
  return false;
}
else if(flag>1){
  document.getElementById("emsg").innerHTML="please enter one @ sign.."
  return false;

}


/* last 3rd or 4th dot(.) mandatory */


if(email.charAt(email.length-3)!='.' && email.charAt(email.length-4)!='.' ){
  document.getElementById("emsg").innerHTML="last 3rd or 4th dot(.) mandatory"
  return false;
}else{
    document.getElementById("emsg").innerHTML=""
  }

//gender

if(document.getElementById("d1").checked==false && document.getElementById("d2").checked==false){
    document.getElementById("gmsg").innerHTML="please select gender.."
    return false;

}
else{
    document.getElementById("gmsg").innerHTML=""

}

//checkbox
if(document.getElementById("c").checked==false ){
    document.getElementById("check-msg").innerHTML="please checked term and conditons.."
    return false;

}
else{
    document.getElementById("check-msg").innerHTML=""

}


}