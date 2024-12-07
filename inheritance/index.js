class student {
    constructor(name) {
        this.fullName = name; 
    }
    
    getname() {
        return this.fullName;  
    }
}

class Students extends student {
    constructor(name) {
        super(name); 
    }
}

let obj = new Students('Alex');
console.log(obj);
console.log(obj.getname());  



