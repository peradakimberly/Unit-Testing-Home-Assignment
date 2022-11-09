const myFunction = {
    heightCompute: function(heightInches){
        let finalHeight = heightInches**2
        return finalHeight;
    },

    bmiCompute: function(weightPounds, finalHeight){
        let bmi = weightPounds / finalHeight * 703;
        return bmi;
    },

    bmiClassify: function(bmi){
        if (bmi <= 18.4)
        {
            return("Underweight");
        }
        else if ((bmi >= 18.5) && (bmi <= 24.9))
        {
            return("Normal");
        }
        else if ((bmi >= 25) && (bmi <= 39.9))
        {
            return("Overweight");
        }
        else if (bmi >= 40)
        {
            return("Obese");
        }
    }
        
}
        
module.exports = myFunction;
