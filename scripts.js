class validator{
    constructor(){
        this.validations = [

        ]
    }
    //iniciar validação de todos os campos
    validate(form){

        //pegar os imputs
        let inputs = form.getElementsByTagName('input');
        
        //HTMLColletion -> array

        let inputsArray = [...inputs];

        //loop dos imputs
        inputsArray.forEach(function(input){
            console.log(input);
        });
    }
}
let form = document.getElementById("Register-form");
let submit = document.getElementById("btn-submit");
let validator = new validator();

//evento que dispara as validções//

submit.addEventListener('click', function(e){

    e.preventDefault();

    validator.validate(form);

});