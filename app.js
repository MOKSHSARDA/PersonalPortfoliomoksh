function emailsend(){

    var Username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;
    
    var messageBody = "name" + Username + 
    "<br/> text" + Text +
    "<br/> email" +Email ;
    
    
    
    
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "mokshwork2005@gmail.com",
      Password : "B1353BE6BA92A69DCC6267E5506CB24A5160",
      To : ' maheshwarimoksh@gmail.com',
      From : "mokshwork2005@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
    message => alert(message)
    );
    }