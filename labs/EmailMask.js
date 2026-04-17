//email masker 
let email = "apple.pie@example.com";

function maskEmail(email){
  atIndex = email.indexOf("@");
  sliceStr = email.slice(1,(atIndex - 1));
  maskMail = email.replace(sliceStr, "*".repeat(sliceStr.length));
  return maskMail;
}

console.log(maskEmail(email));