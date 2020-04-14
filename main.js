var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index=0;

nextSlide.onclick = function () {
     next("next");
}
prevSlide.onclick = function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

//function the convid-19 Estimator

document.getElementById('Estimator-form').addEventListener('submit', function(e){

     document.getElementById('results').style.display = 'none';
     document.getElementById('loading').style.display = 'block';

     setTimeout(Estimates,2000);

     e.preventDefault();

});

function Estimates(){
     
     //UI Variables
    const dataPopulation =             document.getElementById('Data-Population');
    const timeToElapse =               document.getElementById('Time-To-Elapse');
    const reportedCases =          document.getElementById('Reported-Cases');
    const hospitalBeds =           document.getElementById('Total-Hospital-Bed');
    const PeriodType =             document.getElementById('Period-Type');
    const ImpactCurrentlyInfected = document.getElementById('Impact-currently-infected');
   const SevereCurrentlyInfected = document.getElementById('Severe-Currently-infected');
    const ImpactInfectedByRequest = document.getElementById('Impact-Infected-By-Requested-Time');
    const SevereInfectedByRequest = document.getElementById('Severe-Infected-By-Requested-Time');
    const ImpactSevereCaseByRequest = document.getElementById('ImpactSevere-Case-By-Requested-Time');
    const SevereCaseByRequest =     document.getElementById('Severe-Case-By-Requested-Time');
    const TotalHospitalBed =             document.getElementById('Hospital-Bed-By-Requested-Time');
    const ImpactCaseForICU =         document.getElementById('ImpactCase-For-ICU-By-Requested-Time');
    const SevereCaseForICU =       document.getElementById('SevereCase-For-ICU-By-Requested-Time');
    const ImpactCaseForVentilator = document.getElementById('ImpactCase-For-Ventilator-By-Requested-Time');
    const SevereCaseForVentilator = document.getElementById('SevereCase-For-Ventilator-By-Requested-Time');
    const ImpactDollar =             document.getElementById('ImpactDollar-Inflight-Impact');
    const SevereDollar =             document.getElementById('SevereDollar-Inflight-SevereImpact');

     
    const ImpcurrentlyInfected =  Math.floor(reportedCases.value) * 10;
    const SevImpactcurrentlyInfected =  Math.floor(reportedCases.value) * 50;
    const ImpactinfectedByRequestedTime =  Math.floor(ImpcurrentlyInfected * 512);
    const SevereImpactinfectedByRequestedTime =  Math.floor(SevImpactcurrentlyInfected * 512);
    const ImpactSevereCaseByRequestedTime =  Math.floor(0.05 * ImpactinfectedByRequestedTime);
    const SevereCaseByRequestedTime =  Math.floor(0.05 * SevereImpactinfectedByRequestedTime);
    const HospitalBed =  Math.floor(hospitalBeds.value) * 0.35;
    const ImpactcaseForICU =  Math.floor(ImpactinfectedByRequestedTime * 0.05);
    const SevereImpactCaseForICU =  Math.floor(SevereImpactinfectedByRequestedTime * 0.05);
    const ImpactcaseForVentilator =  Math.floor(ImpactinfectedByRequestedTime * 0.02);
    const SeverecaseForVentilator =  Math.floor(SevereImpactinfectedByRequestedTime * 0.02);
    const TimeToElapse =  Math.floor(timeToElapse.value);
    const ImpactdollarInflight =  Math.floor(ImpactinfectedByRequestedTime * 0.65 * 1.5 ) / 30;
    const SeveredollarInflight = Math.floor(SevereImpactinfectedByRequestedTime * 0.65 * 1.5) / 30;

if(isFinite(ImpcurrentlyInfected)){

ImpactCurrentlyInfected.value = ImpcurrentlyInfected;
SevereCurrentlyInfected.value = SevImpactcurrentlyInfected;
ImpactInfectedByRequest.value = ImpactinfectedByRequestedTime;
SevereInfectedByRequest.value =  SevereImpactinfectedByRequestedTime;
ImpactSevereCaseByRequest.value = ImpactSevereCaseByRequestedTime;
SevereCaseByRequest.value = SevereCaseByRequestedTime; 
TotalHospitalBed.value = HospitalBed;ImpactCaseForICU.value = ImpactcaseForICU;
SevereCaseForICU.value = SevereImpactCaseForICU;
ImpactCaseForVentilator.value = ImpactcaseForVentilator;
SevereCaseForVentilator.value = SeverecaseForVentilator;
ImpactDollar.value = ImpactdollarInflight;
SevereDollar.value = SeveredollarInflight;   

     
     document.getElementById('results').style.display = 'block';
    
     document.getElementById('loading').style.display = 'none';



}
          
    dataPopulation.value ='';
    timeToElapse.value ='' ; 
    reportedCases.value =''; 
    hospitalBeds.value ='';
    PeriodType.value = '';

}


