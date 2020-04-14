const covid19ImpactEstimator = (data) => {
const Estimates = () => {
     // alert('calculating');
     
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

     //computational Analysis
     const ImpcurrentlyInfected =  Math.floor(reportedCases.value)*10;
     const SevImpactcurrentlyInfected =  Math.floor(reportedCases.value)*50;

     const ImpactinfectedByRequestedTime =  Math.floor(ImpcurrentlyInfected*512);
     const SevereImpactinfectedByRequestedTime =  Math.floor(SevImpactcurrentlyInfected*512);

     const ImpactSevereCaseByRequestedTime =  Math.floor(0.05*ImpactinfectedByRequestedTime);
     const SevereCaseByRequestedTime =  Math.floor(0.05*SevereImpactinfectedByRequestedTime);

     const HospitalBed =  Math.floor((hospitalBeds.value)*0.35);

     const ImpactcaseForICU =  Math.floor(ImpactinfectedByRequestedTime*0.05);
     const SevereImpactCaseForICU =  Math.floor(SevereImpactinfectedByRequestedTime*0.05);

    const ImpactcaseForVentilator =  Math.floor(ImpactinfectedByRequestedTime*0.02);
    const SeverecaseForVentilator =  Math.floor(SevereImpactinfectedByRequestedTime*0.02);

     const TimeToElapse =  Math.floor(timeToElapse.value);
     const ImpactdollarInflight =  Math.floor((ImpactinfectedByRequestedTime * 0.65 * 1.5 ) / 30);
    const SeveredollarInflight = Math.floor((SevereImpactinfectedByRequestedTime * 0.65 * 1.5) / 30);

    //Inserting the calculated variables into there output using if statement
    if(isFinite(ImpcurrentlyInfected)){

          ImpactCurrentlyInfected.value = ImpcurrentlyInfected;
          SevereCurrentlyInfected.value = SevImpactcurrentlyInfected;
          ImpactInfectedByRequest.value = ImpactinfectedByRequestedTime;
          SevereInfectedByRequest.value =  SevereImpactinfectedByRequestedTime;
          ImpactSevereCaseByRequest.value = ImpactSevereCaseByRequestedTime;
          SevereCaseByRequest.value = SevereCaseByRequestedTime; 
          TotalHospitalBed.value = HospitalBed;
          ImpactCaseForICU.value = ImpactcaseForICU;
          SevereCaseForICU.value = SevereImpactCaseForICU;
          ImpactCaseForVentilator.value = ImpactcaseForVentilator;
          SevereCaseForVentilator.value = SeverecaseForVentilator;
          ImpactDollar.value = ImpactdollarInflight;
          SevereDollar.value = SeveredollarInflight;   

     //show result
     document.getElementById('results').style.display = 'block';
     //Hide loader
     document.getElementById('loading').style.display = 'none';

}else{
     //validate, but has done using required in index HTML

}
          
          dataPopulation.value ='';
          timeToElapse.value ='' ; 
          reportedCases.value =''; 
          hospitalBeds.value ='';
          PeriodType.value = '';

}
Estimates();



};




export default covid19ImpactEstimator;
