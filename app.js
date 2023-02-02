let countBtn = document.querySelector('.count-btn').addEventListener('click', () => {

        const weight = document.querySelector('.weight').value * 0.01;
        const kcal = document.querySelector('.kcal').value;
        const protein = document.querySelector('.protein').value;
        const carbs = document.querySelector('.carbs').value;
        const fat = document.querySelector('.fat').value;
        const sugar = document.querySelector('.sugar').value;
        const productName = document.querySelector('.productName').value;

        const weightRes = document.querySelector('.weightResSpan');
        const kcalRes = document.querySelector('.kcalResSpan')
        const proteinRes = document.querySelector('.proteinResSpan')
        const carbsRes = document.querySelector('.carbsResSpan')
        const fatRes = document.querySelector('.fatResSpan')
        const sugarRes = document.querySelector('.sugarResSpan')

        const notif = document.querySelector('.notif');
        const notifSpan = document.querySelector('.notif-span');
        const productNameField = document.querySelector('.productNameField');
        const sumContent = document.querySelector('.sum-content');
        const sumContainer = document.querySelector('.sum-container');
        

        let weightWeightRes = weight + ' g';
        let weightKcalRes = Math.round(weight * kcal)  + ' kcal';
        let weightProteinRes = Math.round(weight * protein) + ' g';
        let weightCarbsRes = Math.round(weight * carbs) + ' g';
        let weightFatRes = Math.round(weight * fat) + ' g';
        let weightSugarRes = Math.round(weight * sugar) + ' g';
        
        weightRes.innerHTML = weightWeightRes;
        kcalRes.innerHTML = weightKcalRes;
        proteinRes.innerHTML = weightProteinRes;
        carbsRes.innerHTML = weightCarbsRes;  
        fatRes.innerHTML = weightFatRes;        
        sugarRes.innerHTML = weightSugarRes; 

        const color = "yellow";
        const fontSize = "25px";

        weightRes.style.color = color;
        weightRes.style.fontSize = fontSize;
        
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
        
        productNameField.style.color = color;
        productNameField.style.fontSize = fontSize;
        productNameField.innerHTML = productName;

        if(productNameField === ''){
                productNameField.innerHTML = "Podaj nazwe!";
        }

        const sumPar = document.createElement("p");
        const sumText = document.createTextNode(productName + " || ");
        sumText.textContent += weightWeightRes + ' || ';
        sumText.textContent += weightKcalRes + ' || ';
        sumText.textContent += weightProteinRes +' || ';
        sumText.textContent += weightCarbsRes +' || ';
        sumText.textContent += weightProteinRes +' || '; 
        sumText.textContent += weightSugarRes +' || ';
        sumPar.appendChild(sumText);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn')
        const btnText = document.createTextNode('Usuń');
        removeBtn.appendChild(btnText);
        removeBtn.addEventListener('click', () => {
                sumPar.remove();
                removeBtn.remove();
                underline2.classList.remove('underline2')
        })

        const underline2 = document.createElement('div');
        underline2.classList.add('underline2')
        
        sumContent.appendChild(underline2)
        sumContent.appendChild(sumPar);
        sumPar.appendChild(removeBtn);
        
})
    



    

    
    