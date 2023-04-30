
function generatePasswords() {
    const easyCharset = "abcdefghijklmnopqrstuvwxyz";
    const mediumCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const hardCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]";
    var passwords = [];
    var password;
  
    // Generate weak password
    password = "";
    for (var i = 0; i < 6; i++) {
      password += easyCharset.charAt(Math.floor(Math.random() * easyCharset.length));
    }
    passwords.push(password);
  
    // Generate good password
    password = "";
    for (var i = 0; i < 10; i++) {
      password += mediumCharset.charAt(Math.floor(Math.random() * mediumCharset.length));
    }
    passwords.push(password);
  
    // Generate strong password
    password = "";
    for (var i = 0; i < 16; i++) {
      password += hardCharset.charAt(Math.floor(Math.random() * hardCharset.length));
    }
    passwords.push(password);
  
    // Generate impossible password
    password = "";
    for (var i = 0; i < 20; i++) {
      password += hardCharset.charAt(Math.floor(Math.random() * hardCharset.length));
    }
    passwords.push(password);
  
    return {
      weakPassword: passwords[0],
      goodPassword: passwords[1],
      strongPassword: passwords[2],
      impossiblePassword: passwords[3]
    };
  }
const btn = document.querySelector('#btn');
const weakhtml = document.querySelector('#weak');
const goodhtml = document.querySelector('#good');
const stronghtml = document.querySelector('#strong');
const impossiblehtml = document.querySelector('#impossible');
const copyweak = document.getElementById("copiweak");
const copygood = document.getElementById("copigood");
const copystrong = document.getElementById("copistrong");
const copyimpossible = document.getElementById("copiimpossible");
btn.addEventListener('click', function() {

    var passwords = generatePasswords();
    var weak = passwords.weakPassword;
    var good = passwords.goodPassword;
    var strong = passwords.strongPassword;
    var impossible = passwords.impossiblePassword;

  weakhtml.innerHTML = ' ' + weak;
  goodhtml.innerHTML = ' ' + good ;
  stronghtml.innerHTML = ' ' + strong ;
  impossiblehtml.innerHTML = ' ' + impossible;
  

  });
  copyweak.addEventListener("click", async() => {
     try{
                     await navigator.clipboard.writeText(weakhtml.innerHTML);
     }catch(err){
         console.log(err);
     }
  });
  copygood.addEventListener("click", async() => {
    try{
                    await navigator.clipboard.writeText(goodhtml.innerHTML);
    }catch(err){
        console.log(err);
    }
 });
 copystrong.addEventListener("click", async() => {
    try{
                    await navigator.clipboard.writeText(stronghtml.innerHTML);
    }catch(err){
        console.log(err);
    }
 });
 copyimpossible.addEventListener("click", async() => {
    try{
                    await navigator.clipboard.writeText(impossiblehtml.innerHTML);
    }catch(err){
        console.log(err);
    }
 });

 
