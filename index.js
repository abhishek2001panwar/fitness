 //fitmefy npm package


// calorie counter
function calorieCalculator(weight, height) {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be greater than zero");
  }
  var MaintainWeightCalories = (weight * 24).toFixed(2);
  var LoseWeightCalories = (MaintainWeightCalories - 300).toFixed(2);
  var GainWeightCalories = (parseFloat(MaintainWeightCalories) + 500).toFixed( 2
  );
  return [MaintainWeightCalories, LoseWeightCalories, GainWeightCalories];
}
// calulate BMI

function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be greater than zero");
  }
  return ((weight / (height * height)) * 10000).toFixed(2);
}
// calulate BMR
function calculateBMR(weight, height, age   ){
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be greater than zero");
  }
  return (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2);
}
function tdeeCalculation(weight, height, age, activityLevel) {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be greater than zero");
  }
  var bmr = calculateBMR(weight, height, age);
  var tdee = bmr * activityLevel;
  return tdee.toFixed(2);
}
// Macros Calculation

function macrosCalculation(weight, height, age, activityLevel) {
  var tdee = tdeeCalculation(weight, height, age, activityLevel);
  var protein = (weight * 2.2).toFixed(2);
  var fat = (weight * 0.3).toFixed(2);
  var carbs = ((tdee - (protein * 4 + fat * 9)) / 4).toFixed(2);
  
  return [protein, fat, carbs];
}
// Heart Rate Zones
function heartRateZones(age) {
  var maxHeartRate = 220 - age;
  var heartRateZones = {
    "Recovery": [maxHeartRate * 0.6, maxHeartRate * 0.7],
    "Endurance": [maxHeartRate * 0.7, maxHeartRate * 0.8],
    "Aerobic": [maxHeartRate * 0.8, maxHeartRate * 0.9],
    "Anaerobic": [maxHeartRate * 0.9, maxHeartRate * 0.95],
    "Red Line": [maxHeartRate * 0.95, maxHeartRate],
  };
  return heartRateZones;
}
//One-Rep Max (1RM)
function oneRepMax(weight, reps) {
  return (weight * (1 + reps / 30)).toFixed(2);
}

//Body Fat Percentage
function bodyFatPercentage(weight, height){
  return (1.2 * calculateBMI(weight, height) + 0.23 * 25 - 10.8 * 1 - 5.4).toFixed(2);

}
//Hydration Needs
function hydrationNeeds(weight){
  return (weight * 0.033).toFixed(1) + "L";
}
//VO2 Max Estimation
function vo2MaxEstimation( time, distance){
  var vo2Max = 15 * (distance / time) + 3.5;
  return vo2Max.toFixed(2);
}

//Workout Plan Generator
function workoutPlanGenerator(workoutDays, workoutTime, workoutType){
  var workoutPlan = {
    "Monday": [workoutTime, workoutType],
    "Tuesday": [workoutTime, workoutType],
    "Wednesday": [workoutTime, workoutType],
    "Thursday": [workoutTime, workoutType],
    "Friday": [workoutTime, workoutType],
    "Saturday": [workoutTime, workoutType],
    "Sunday": [workoutTime, workoutType],
  };
  return workoutPlan;
}
//Stress Level Estimator
function  stressEstimator(workoutDays, workkingHours, sleepHours){
  var stressLevel = 0;
  if(workoutDays < 3){
    stressLevel += 1;
  }
  if(workkingHours > 8){
    stressLevel += 1;
  }
  if(sleepHours < 8){
    stressLevel += 1;
  } 
  return stressLevel ;

}
export { calculateBMI, stressEstimator,  workoutPlanGenerator ,vo2MaxEstimation , calorieCalculator , hydrationNeeds , bodyFatPercentage , calculateBMR , tdeeCalculation, macrosCalculation ,heartRateZones ,oneRepMax};
