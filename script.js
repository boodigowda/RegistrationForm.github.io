        let registrationForm = document.getElementById('regiter-form');
        registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();   //Stops auto form submission(Refreshing)
         validateForm();
        });

        let validateForm = ()=>{
            checkUserName();
            checkEmail();
            checkPassword();
            checkconfirmPassword();
        }
        //VALIDATING THE USERNAME
        let checkUserName= ()=>{
            let inputEl = document.getElementById('username');
            let inputFeedackEl = document.getElementById('username_feedback');
            let regExp = /^[a-zA-Z0-9]{4,10}$/;
            //he basic expression requires at least 1 lower case, 1 upper case, 1 numeric, 
            //1 non - word and no whitespace.
            if (regExp.test(inputEl.value)) {
                makeValid(inputEl, inputFeedackEl);
            } else {
                makeInValid(inputEl, inputFeedackEl);
            }
        }
        
        //VALIDATING THE MAIL
        let checkEmail= ()=>{
            let inputEl = document.getElementById('email');
            let inputFeedackEl = document.getElementById('email_feedback');
            let regExp = /^(?![0-9]|[_].*$)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            //he basic expression requires at least 1 lower case, 1 upper case, 1 numeric, 
            //1 non - word and no whitespace.
            if (regExp.test(inputEl.value)) {
                makeValid(inputEl, inputFeedackEl);
            } else {
                makeInValid(inputEl, inputFeedackEl);
            }
        }
        
        //VALIDATING THE PASSWORD
        let checkPassword= ()=>{
            let inputEl = document.getElementById('password');
            let inputFeedackEl = document.getElementById('password_feedback');
            let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,9}$/;
            //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
            if (regExp.test(inputEl.value)) {
                makeValid(inputEl, inputFeedackEl);
            } else {
                makeInValid(inputEl, inputFeedackEl);
            }
        }

        //VALIDATING THE PASSWORD
        let checkconfirmPassword= ()=>{
            let inputEl = document.getElementById('c_password');
            let inputFeedackEl = document.getElementById('c_password_feedback');
            let passwordEl = document.getElementById('password')
           let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,9}$/;
            //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
            if (regExp.test(inputEl.value) && passwordEl.value===inputEl.value) {
                makeValid(inputEl, inputFeedackEl);
            } else {
                makeInValid(inputEl, inputFeedackEl);
            }
        }
        //make Valid
        let makeValid = (inputEl, inputFeedackEl) => {
            inputEl.classList.add('is-form-valid');
            inputEl.classList.remove('is-form-invalid');
            inputFeedackEl.classList.add('text-sucess');
            inputFeedackEl.classList.remove('text-danger');
            inputFeedackEl.innerText = 'Looks good';
        }
        //make invalid
        let makeInValid = (inputEl, inputFeedackEl) =>{
            inputEl.classList.remove('is-form-invalid');
            inputEl.classList.add('is-form-invalid');
            inputFeedackEl.classList.remove('text-danger');
            inputFeedackEl.classList.add('text-danger');
            inputFeedackEl.innerText = 'Please Enter Valid Input Field';
        }

        //KEYUP events

        let usernameEl=document.getElementById('username');
        usernameEl.addEventListener('keyup', ()=>{
            checkUserName();
        });

        let emailEl=document.getElementById('email');
        emailEl.addEventListener('keyup', ()=>{
            checkEmail();
        })

        let passwordEl=document.getElementById('password');
        passwordEl.addEventListener('keyup', ()=>{
            checkPassword();
        })

        let cPasswordEl=document.getElementById('c_password');
        cPasswordEl.addEventListener('keyup', ()=>{
            checkconfirmPassword();
        });

        

        
        
      
       

