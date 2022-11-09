const myFunction = {
    heightCompute: function(heightInches){
        let finalHeight = heightInches**2
        console.log (finalHeight); 
    },

    //I replaced all return with console log since this is manual testing. I have to see if it is working properly

    bmiCompute: function(weightPounds, finalHeight){
        let bmi = weightPounds / finalHeight * 703;
        console.log (bmi);
    },

    bmiClassify: function(bmi){
        if (bmi <= 18.4)
        {
            console.log("Underweight");
        }
        else if ((bmi >= 18.5) && (bmi <= 24.9))
        {
            console.log("Normal");
        }
        else if ((bmi >= 25) && (bmi <= 39.9))
        {
            console.log("Overweight");
        }
        else if (bmi >= 40)
        {
            console.log("Obese");
        }
    }
        
}
        

myFunction.heightCompute(61);
myFunction.bmiCompute(101, 3721);
myFunction.bmiClassify(19.08);