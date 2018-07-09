(function(){
     
    const form = document.createElement("form");
    document.body.appendChild(form);
    
    const fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const validation_array = [
            {
                rule: function() {
                    let regexp1 = /\@/;
                    let regexp2 = /\./;
                    return inputEmail.value.length >= 6 && regexp1.test(inputEmail.value) && regexp2.test(inputEmail.value);
                },
                message: "Email must be valid!"
            },
            {
                rule: function() {
                    return inputPassword.value.length >= 9;
                },
                message:"Password must be at least 9 characters long!"
            },
            {
                rule: function() {
                    let regexp = /[0-9]/;
                    return regexp.test(inputPassword.value);
                },
                message: "Password must have at least 1 number!"
            },
            {
                rule: function() {
                    let regexp = /[A-Z]/;
                    return regexp.test(inputPassword.value);
                },
                message: "Password must have at least one uppercase letter!"  
            },
            {
                rule: function() {
                    let regexp = /[\!\@\#\$\%\^\&\*\.]/;
                    return regexp.test(inputPassword.value);
                },
                message: "Password must have at least one special character!"
            }
        ];
        
        let errors = [];
        
        for ( let i = 0; i < validation_array.length; i++) {
            let validation = validation_array[i];
            
            if(!validation.rule()) {
                errors.push(validation.message);    
            }
        };
        if( errors.length === 0) {
            alert("Success");
        }
        else {
            alert("Some Errors were found:" + "\n" + errors.join("\n"));
        }
        
        
    });
    
    const inputEmail = document.createElement("input");
    fieldset.appendChild(inputEmail);
    inputEmail.type = "text";
    inputEmail.placeholder = "Email...";
    inputEmail.style.marginRight = "4px";
    
    const inputPassword = document.createElement("input");
    fieldset.appendChild(inputPassword);
    inputPassword.type = "text";
    inputPassword.placeholder = "Password...";
    inputPassword.style.marginRight= "4px";
    
    const inputSubmit = document.createElement("input");
    fieldset.appendChild(inputSubmit);
    inputSubmit.type = "submit";
    inputSubmit.value = "OK";
    
    
})();