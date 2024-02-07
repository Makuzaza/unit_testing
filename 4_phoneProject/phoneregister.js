'use strict';

module.exports = class PhoneRegister {
    #register
    constructor(data){
        if(!data){
            throw new Error('phone data missing');
        }
        this.#register = data;
    }

    getTypes(){
       const foundTypes = [];
       for (const person of this.#register) {
           for (const phone of person.phones) {
               if(!foundTypes.includes(phone.type)){
                   foundTypes.push(phone.type);
               }
           }
       }
       return foundTypes;

    }
    getPersonsNumberByType(firstname, lastname, type){
        if (arguments.length < 3){
            throw new Error('missing parameter');
        } 

        const numbersFound = [];    
        let found = false;
        for (let i=0; !found && i<this.#register.length; i++){
            const person = this.#register[i];
        // for (const person of this.#register){
          if (person.firstname === firstname && person.lastname === lastname){
             for (const phone of person.phones){
                if(phone.type === type){
                    numbersFound.push(phone.number);
                }
             }
                found = true;
          }
        }
        return numbersFound;
    }
}