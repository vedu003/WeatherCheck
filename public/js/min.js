const cityname= document.getElementById('cityname');
const submitBtn= document.getElementById('submitbtn');
const city_name= document.getElementById('city_name');

const temp_real= document.getElementById('temp_real');
const temp_status= document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityvalue= cityname.value;
    if(cityvalue === "") {
        city_name.innerText = 'Please Write the city name before Search';
        datahide.classList.add('data_hide');
    }

    else{
        try{
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=72b906ab8c5c8f0e6903707a1be1250e`
            const response=await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            temp_real.innerText= arrdata[0].main.temp;
            city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;

            const tempMood = arrdata[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class= 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class= 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }else {
                temp_status.innerHTML = "<i class= 'fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = 'Please Write the city name Properly';
            datahide.classList.add('data_hide');
        }
        
    }
    
}
submitBtn.addEventListener('click',getInfo);

