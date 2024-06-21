document.querySelector('.img-btn').addEventListener('click',function()
{
    document.querySelector('.cont').classList.toggle('s-signup')

}
);
function validationSignup() {
    // Get input elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('c_password').value;
    
    var valid = true;

    // Name validation
    if (name === "") {
        document.getElementById('error_name').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error_name').style.display = 'none';
    }

    // Email validation
    if (email === "") {
        document.getElementById('error_email').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error_email').style.display = 'none';
    }

    // Password validation
    if (password === "") {
        document.getElementById('error_password').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error_password').style.display = 'none';
    }

    // Confirm password validation
    if (cpassword !== password || cpassword === "") {
        document.getElementById('error_cpassword').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error_cpassword').style.display = 'none';
    }

    

    return valid;
}
function validationSignin()
{
    var email=document.getElementById('signin_email').value;
    var password=document.getElementById('signin_password').value;
    var valid=true;

      // Email validation
      if (email === "") 
        {
        document.getElementById('errorL_email').style.display = 'block';
        valid = false;
         }
     else 
     {
        document.getElementById('errorL_email').style.display = 'none';
    }

    // Password validation
    if (password === "") 
        {
        document.getElementById('errorL_password').style.display = 'block';
        valid = false;
    } 
    else
     {
        document.getElementById('errorL_password').style.display = 'none';
    }

    return valid;
   
}

