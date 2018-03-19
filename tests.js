var expect = chai.expect;

describe('field validation pass test', function() {
	//case1
  it('should pass the field validation,return 200 and msg is Bank details saved', function() {
	var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"JohnSmith1",
				"account_number":"1",
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
    var xhr = new XMLHttpRequest();  
	var s;
	var msg; 
    xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
	xhr.onreadystatechange = function(){ 	
        if(xhr.readyState == 4){		
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.success;		
          }
    };	 
     xhr.send(data);         
   expect(s).to.be.equal(200);
   expect(msg).to.be.equal("Bank details saved"); 
				  
  });

  //case2
  it('should pass the field validation,return 200 and msg is Bank details saved', function() {
	var data = {
				"payment_method":"LOCAL",
				"bank_country_code":"US",                        
				"account_name":"AJ",
				"account_number":"12312318888888888",
				"aba":"11122233A"
				};
    var xhr = new XMLHttpRequest(); 
	var s;
	var msg;
    xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
	xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.success;
			
          }
    };
	 
     xhr.send(data);         
   expect(s).to.be.equal(200);
   expect(msg).to.be.equal("Bank details saved"); 
			
	  
  });

  //case3
  it('should pass the field validation,return 200 and msg is Bank details saved', function() {
	var data = {
				"payment_method":"LOCAL",
				"bank_country_code":"AU",                        
				"account_name":"AJ",
				"account_number":"123123",
				"bsb":"111222"
				};
    var xhr = new XMLHttpRequest(); 
	var s;
	var msg;

    
    xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
	xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.success;
			
          }
    };
	 
     xhr.send(data);         
   expect(s).to.be.equal(200);
   expect(msg).to.be.equal("Bank details saved"); 
			
	  
  });

 //case4
  it('should pass the field validation,return 200 and msg is Bank details saved', function() {
	var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"AU",                        
				"account_name":"AJAJAJAJAJ",
				"account_number":"123123123",
				"swift_code":"ICBKAUBJ",
				"bsb":"111222"
				};
    var xhr = new XMLHttpRequest(); 
	var s;
	var msg; 
    xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
	xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.success;
			
          }
    };
	 
     xhr.send(data);       
   expect(s).to.be.equal(200);
   expect(msg).to.be.equal("Bank details saved"); 
			
	  
  });

  //case5
  it('should pass the field validation,return 200 and msg is Bank details saved', function() {
	var data = {
				"payment_method":"LOCAL",
				"bank_country_code":"CN",                        
				"account_name":"AJ",
				"account_number":"12312312"
				};
    var xhr = new XMLHttpRequest(); 
	var s;
	var msg;
    xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
	xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.success;		
          }
    };
	 
     xhr.send(data);           
   expect(s).to.be.equal(200);
   expect(msg).to.be.equal("Bank details saved"); 
			
	  
  });

   //case6
  it('should pass the field validation,return 200 and msg is Bank details saved', function() {
	var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"CN",                        
				"account_name":"AJAJAJAJAJ",
				"account_number":"12312312123123121231",
				"swift_code":"ICBKCNBJ"
				};
    var xhr = new XMLHttpRequest(); 
	var s;
	var msg;   
    xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
	xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.success;
			
          }
    };
	 
     xhr.send(data);          
   expect(s).to.be.equal(200);
   expect(msg).to.be.equal("Bank details saved"); 
			
	  
  });


});


describe('field validation fail test', function() {
  describe('payment_methed test',function(){
	//case1
	 it('hint payment_method should be required,return 400 and msg is [payment_method field required, the value should be either LOCAL or SWIFT]', function() {
		var data = {
				"payment_method":null,
				"bank_country_code":"US",                        
				"account_name":"JohnSmith1",
				"account_number":"1",
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'payment_method\' field required, the value should be either \'LOCAL\' or \'SWIFT\'"); 
  });
  
  });

  describe('bank_country_code test',function(){
	//case1
	 it('hint bank_country_code can be one of US, AU, CN,return 400 and msg is [bank_country_code can be one of US, AU, CN]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"CA",                        
				"account_name":"JohnSmith1",
				"account_number":"1",
				"swift_code":"ICBKCABJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("bank_country_code can be one of US, AU, CN"); 
  });
  
     //case2
	 it('hint bank_country_code is required,return 400 and msg is [bank_country_code is required]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":null,                        
				"account_name":"JohnSmith1",
				"account_number":"1",
				"swift_code":"ICBKCABJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;   
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);          
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'bank_country_code\' is required"); 
     });
});


   describe('account_name test',function(){
	   //case1
       it('hint length of account_name should be between 2 and 10,return 400 and msg is [Length of account_name should be between 2 and 10]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"J",
				"account_number":"123",
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_name should be between 2 and 10"); 
     });

     //case2
       it('hint length of account_name should be between 2 and 10,return 400 and msg is [Length of account_name should be between 2 and 10]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"JJJKKKJJJKK",
				"account_number":"123",
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_name should be between 2 and 10"); 
     });

       //case3
       it('hint account_name is required,return 400 and msg is [account_name is required]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":null,
				"account_number":"123",
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'account_name\' is required"); 
     });
  
 });



 describe('account_number test',function(){
	   //case1
       it('hint account_number is required,return 400 and msg is [account_number is required]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"AJ",
				"account_number":null,
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'account_number\' is required"); 
     });
 
     //case2
       it('hint Length of account_number should be between 1 and 17 when bank_country_code is US,return 400 and msg is [Length of account_number should be between 1 and 17 when bank_country_code is US]', function() {
		var data = {
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"AJ",
				"account_number":123123123123123123,
				"swift_code":"ICBKUSBJ",
				"aba":"11122233A"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_number should be between 1 and 17 when bank_country_code is US"); 
     });




     //case3
       it('hint Length of account_number should be between 6 and 9 when bank_country_code is AU,return 400 and msg is [Length of account_number should be between 6 and 9 when bank_country_code is AU]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"AU",                        
				"account_name":"AJ",
				"account_number":12312,
				"swift_code":"ICBKAUBJ",
				"bsb":"111222"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_number should be between 6 and 9 when bank_country_code is AU"); 
     });
 
    //case4
       it('hint Length of account_number should be between 6 and 9 when bank_country_code is AU,return 400 and msg is [Length of account_number should be between 6 and 9 when bank_country_code is AU]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"AU",                        
				"account_name":"AJ",
				"account_number":1231231231,
				"swift_code":"ICBKAUBJ",
				"bsb":"111222"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_number should be between 6 and 9 when bank_country_code is AU"); 
     });
 
    //case5
       it('hint Length of account_number should be between 8 and 20 when bank_country_code is CN,return 400 and msg is [Length of account_number should be between 8 and 20 when bank_country_code is CN]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"CN",                        
				"account_name":"AJ",
				"account_number":1231231,
				"swift_code":"ICBKCNBJ"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_number should be between 8 and 20 when bank_country_code is CN"); 
     });
 
     //case6
       it('hint Length of account_number should be between 8 and 20 when bank_country_code is CN,return 400 and msg is [Length of account_number should be between 8 and 20 when bank_country_code is CN]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"CN",                        
				"account_name":"AJ",
				"account_number":123123123123123123123,
				"swift_code":"ICBKAUBJ"
				
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of account_number should be between 8 and 20 when bank_country_code is CN"); 
     });
 
   });


 describe('swift_code test',function(){

    //case1
       it('hint swift_code is required,return 400 and msg is [swift_code is required]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"CN",                        
				"account_name":"AJ",
				"account_number":123123123,
				"swift_code":null
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'swift_code\' is required"); 
     });

    //case2
       it('hint swift_code is not valid,return 400 and msg is [The swift code is not valid for the given bank country code:CN]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"CN",                        
				"account_name":"AJ",
				"account_number":123123123,
				"swift_code":"ICBKAUBJ"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("The swift code is not valid for the given bank country code:CN"); 
     });
 
     //case3
       it('hint Length of swift_code should be either 8 or 11,return 400 and msg is [Length of swift_code should be either 8 or 11]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"CN",                        
				"account_name":"AJ",
				"account_number":123123123,
				"swift_code":"ICBKAUJ"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of swift_code should be either 8 or 11"); 
     });
 
 });


 describe('bsb test',function(){

    //case1
       it('hint bsb is required,return 400 and msg is [bsb is required]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"AU",                        
				"account_name":"AJ",
				"account_number":123123,
				"swift_code":"ICBKAUBJ",
				"bsb":null
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'bsb\' is required"); 
     });

    //case2
       it('hint Length of bsb should be 6,return 400 and msg is [Length of bsb should be 6]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"AU",                        
				"account_name":"AJ",
				"account_number":123123,
				"swift_code":"ICBKAUBJ",
				"bsb":"1231"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 		
           if(xhr.readyState == 4){		
				s=xhr.status;
				var json=JSON.parse(xhr.responseText)
				msg=json.error;		
          }
    };	 
		xhr.send(data);       
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of bsb should be 6"); 
     });
 
 });

  describe('aba test',function(){

    //case1
       it('hint aba is required,return 400 and msg is [aba is required]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"AJ",
				"account_number":123123,
				"swift_code":"ICBKUSBJ",
				"aba":null
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;
	
    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 
		
        if(xhr.readyState == 4){
			
		   s=xhr.status;
           var json=JSON.parse(xhr.responseText)
		   msg=json.error;
			
          }
    };
	 
		xhr.send(data);       
     
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("\'aba\' is required"); 
     });

    //case2
       it('hint Length of aba should be 9,return 400 and msg is [Length of aba should be 9]', function() {
		var data = { 
				"payment_method":"SWIFT",
				"bank_country_code":"US",                        
				"account_name":"AJ",
				"account_number":123123,
				"swift_code":"ICBKUSBJ",
				"aba":"123AB"
				};
		var xhr = new XMLHttpRequest();  
		var s;
		var msg;    
		xhr.open('POST','http://preview.airwallex.com:30001/bank',false);   
		xhr.onreadystatechange = function(){ 		
           if(xhr.readyState == 4){		
				s=xhr.status;
				var json=JSON.parse(xhr.responseText)
				msg=json.error;		
          }
    };	 
		xhr.send(data);       
		expect(s).to.be.equal(400);
		expect(msg).to.be.equal("Length of aba should be 9"); 
     });
 
 });


});