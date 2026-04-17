//email masker 
let email = "apple.pie@example.com";

function maskEmail(email){
  const atIndex = email.indexOf("@");
  const sliceStr = email.slice(1,(atIndex - 1));
  const maskMail = email.replace(sliceStr, "*".repeat(sliceStr.length));
  return maskMail;
}

console.log(maskEmail(email));