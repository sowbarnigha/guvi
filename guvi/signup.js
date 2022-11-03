const signup_rules = {
    email: {
        presence: true,
        email:true
      },
      password:{
        presence:true,
        length:{
            minimum:8,
            maximum:200
        }
      },
      repassword:{
        presence: true,
        length:{
          minimum:8,
          maximum:200
        },
        equality:"password"
      },
      first_name:{
        presence:true,
        length:{
            minimum:2,
            maximum:200
        }
      },
      last_name:{
        presence:true,
        length:{
            minimum:1,
            maximum:200
        }
      }
      ,
      mobile:{
        presence:true,
        numericality:{
            onlyInteger:true
        },
        length:{
            is:10
        }
      },
      age:{
        presence:true,
        numericality:{
            onlyInteger:true
        },
      }
    
};


document.getElementById("signup-form").addEventListener('submit',(e)=>{
    e.preventDefault();

    function clearErrorFields(fields){
      for(let field of fields){
        document.getElementById("error-"+field).innerHTML="";
      }
    }

    function setErrorFields(fields,errors){
      for(let field of fields){
        let errContent = '';
        if(errors[field]){
          errContent = '<ul>'
          for(let error of errors[field]){
              errContent+='<li>'+error+'</li>';
          }
          errContent+='</ul>';
        }
        document.getElementById("error-"+field).innerHTML = errContent;

      }
    }


    const fields = ['email','password','repassword','first_name','last_name','gender','mobile'];

    clearErrorFields(fields);


    const values = validate.collectFormValues(e.target);
    const validated = validate(values,signup_rules);
    const data = new URLSearchParams(new FormData(e.target));
    if(validated===undefined){
        fetch("./signup.php",{
            method:'POST',
            body:data
        }).then((res)=>res.json()).then(data=>alert(data.message));
    }else{
        setErrorFields(fields,validated);
    }
});



