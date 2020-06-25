module.exports = {
    sum: function(num1,num2){
        return num1 + num2
    },
    smaller: function(num1, num2){
        //return the smallest/lower number
        var smallest = num1;
        if(num1 < num2){
            return num1
        } else{
            return num2
        }
        
    },
    greater: function(num1,num2,num3){
        if(num1>num2 && num1>num3){
            return num1
        } else if(num2>num1 && num2>num3){
            return num2
        } else{
            return num3
        }
    },
    
    multiply: function(num1, num2){
        return num1 * num2
    },

    divide: function(num1, num2){
        if(num2 == 0){
            console.log("Error, cannot divide by 0")
            return 0
        } else
        return num1/num2
    },

    isEven: function(num){
        if(num%2 > 0){
            return false
        } else{
            return true
        }

    },

    isOdd: function(num){
        if(num%2 > 0){
            return true
        } else{
            return false
        }

    }
        
}