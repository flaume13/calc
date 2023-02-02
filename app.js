let countBtn = document.querySelector('.count-btn').addEventListener('click', () => {

        let weight = document.querySelector('.weight').value * 0.01;
        let kcal = document.querySelector('.kcal').value;
        let protein = document.querySelector('.protein').value;
        let carbs = document.querySelector('.carbs').value;
        let fat = document.querySelector('.fat').value;
        let sugar = document.querySelector('.sugar').value;
        let productName = document.querySelector('.productName').value;

        const kcalRes = document.querySelector('.kcalResSpan')
        const proteinRes = document.querySelector('.proteinResSpan')
        const carbsRes = document.querySelector('.carbsResSpan')
        const fatRes = document.querySelector('.fatResSpan')
        const sugarRes = document.querySelector('.sugarResSpan')
        const notif = document.querySelector('.notif');
        const productNameField = document.querySelector('.productNameField');

        let weightKcalRes = weight * kcal + ' kcal';
        let weightProteinRes = weight * protein + ' g';
        let weightCarbsRes = weight * carbs + ' g';
        let weightFatRes = weight * fat + ' g';
        let weightSugarRes = weight * sugar + ' g';

        kcalRes.innerHTML = weightKcalRes;
        proteinRes.innerHTML = weightProteinRes;
        carbsRes.innerHTML = weightCarbsRes;  
        fatRes.innerHTML = weightFatRes;        
        sugarRes.innerHTML = weightSugarRes; 

        const color = "yellow";
        const fontSize = "25px";

        kcalRes.style.color = color;
        kcalRes.style.fontSize = fontSize;

        proteinRes.style.color = color;
        proteinRes.style.fontSize = fontSize;

        carbsRes.style.color = color;
        carbsRes.style.fontSize = fontSize;

        fatRes.style.color = color;
        fatRes.style.fontSize = fontSize;

        sugarRes.style.color = color;
        sugarRes.style.fontSize = fontSize;
        
        productNameField.innerHTML = productName;
})
    



    

    
    