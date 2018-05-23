var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var names=firstAndLast.split(' ');
    this.getFullName = function() {
      return names[0]+" "+names[1];
    };
    this.getFirstName = function() {
      return names[0];
    };
    this.getLastName = function() {
      return names[1];
    };
    this.setFirstName = function(name) {
      names[0]=name;
    };
    this.setLastName = function(last) {
      names[1]=last;
    };
    this.setFullName = function(fullName) {
      names=fullName.split(' ');
    };
    
};

var bob = new Person('Bob Ross');
bob.getFirstName();
