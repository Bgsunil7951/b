function computeResult(operator) {
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)

    switch (operator) {
        case 0:  
        document.getElementById("result").value=a+b
        break;
        case 1: 
        document.getElementById("result").value=a-b
          break; 
          case 2: 
          document.getElementById("result").value=a*b
        break;
        case 3: 
        if(b==0) alert("divide by zero error")

        document.getElementById("result").value=a/b
        break;  
        
          default: 
            break;
    }
    
}