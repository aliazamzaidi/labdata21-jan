function signUpFunc(){
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    console.log(firstName.value + lastName.value + email.value + password.value);

    var user = {}
    user.firstName = firstName.value;
    user.lastName = lastName.value;
    user.email = email.value;
    user.password = password.value;
    console.log(user);

    // user validation
    if ((user.firstName && user.lastName) == ""){
      para1 = 'Please Enter Correct Name';
    }
    else if((!isNaN(user.firstName)) || (!isNaN(user.lastName))){
        para1 = 'You can not include number in your name'
    }
    else if(user.password.length <= 4){
        para1 = 'Password length is more than 4';
    }
    else if(user.password.length >= 14){
        para1 = 'Password length should be less than 14 letter';
    }
    else if(user.email.indexOf('@') == -1 || user.email.indexOf('.') == -1){
        para1 = 'email should be correct';
    }
    else{
        para1 = 'every thing is correct';
        putData()
        console.log('working till here')
    }

    //para1 coding
    var para1;
    //irrelevant portion
    var spanCreate = document.createElement('span');
    spanCreate.setAttribute('class','glyphicon glyphicon-thumbs-down');
    document.getElementById('para1').appendChild(spanCreate);
    //irrelevant coding portion till here
    document.getElementById('para1').innerHTML = para1 + '<br>';
        
    function putData(){
       var stringifiedData =  JSON.stringify(user);
        localStorage.setItem('user', stringifiedData);
    }
}