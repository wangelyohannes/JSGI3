function PII(name, ssn) {
    var pii = {
      name: name,
      ssn: ssn
    };
    
    return {
      getName: function() {
        return pii.name;
      }
    };
  }
  
  var customer = PII('Wangel Yohannes', '123-45-6789');
  console.log(`Name: ${customer.getName()}`);
  console.log(`SSN: ${customer.ssn}`);