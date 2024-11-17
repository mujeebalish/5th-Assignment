var image = document.getElementById("image");
var countryDetail = "'<p></p>'";
var afghanistanDetail = document.getElementById("para");
var countr_H1Name = document.getElementById("detail-h1");
var findCountry = () => {
    var userInput = document.getElementById("userInp").value;
    if(userInput == "India"){
        image.src = "https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        
        }
        else if(userInput == "Pakistan"){
            image.src = "https://img.freepik.com/free-photo/flag-pakistan_1401-192.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        }
        else if(userInput == "Afghanistan"){
            image.src = "https://plus.unsplash.com/premium_photo-1675865393053-b077c9616420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZnaGFuaXN0YW4lMjBmbGFnfGVufDB8fDB8fHww";
            
        }
        else if(userInput == "China"){
            image.src = "https://img.freepik.com/free-vector/china-flag-flag-round-frame_1308-71755.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        }
        else if(userInput == "America" || userInput == "Usa"){
            image.src = "https://img.freepik.com/free-psd/american-flag_23-2150587464.jpg?ga=GA1.1.1057266126.1707706687&semt=ais_hybrid";
        }
        countr_H1Name.innerHTML = userInput;
        
    }
    
    
    
            

    
    

var inp_Outp = () => {
    var userInput = document.getElementById("userInp").value;
    var outPutField = document.getElementById("output-field");
    outPutField.value = userInput;
    
    
}