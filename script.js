import inquirer from 'inquirer';
import clipboardy from 'clipboardy';
import { calculateBMI, stressEstimator, workoutPlanGenerator, vo2MaxEstimation, bodyFatPercentage, hydrationNeeds, calorieCalculator, heartRateZones, macrosCalculation, oneRepMax } from "./index.js";

const questions = [
    {
        type: 'list',
        name: 'functionName',
        message: 'Enter the function name:',
        choices: [
            'calculateBMI',
            'stressEstimator',
            'workoutPlanGenerator',
            'vo2MaxEstimation',
            'bodyFatPercentage',
            'hydrationNeeds',
            'calorieCalculator',
            'heartRateZones',
            'macrosCalculation',
            'oneRepMax'
        ]
    }
];



const promptUser = () => {
    inquirer.prompt(questions).then(answers => {
        const { functionName } = answers;

        switch (functionName) {
            case "calculateBMI":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight (kg):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'height', message: 'Enter height (m):', validate: input => !isNaN(input) }
                ]).then(({ weight, height }) => {
                    const result = calculateBMI(parseFloat(weight), parseFloat(height));
                    clipboardy.writeSync(result.toString());
                  
                    console.log('Result copied to clipboard!');
                });
                break;
            case "stressEstimator":
                inquirer.prompt([
                    { type: 'input', name: 'level', message: 'Enter stress level:', validate: input => !isNaN(input) },
                    { type: 'input', name: 'duration', message: 'Enter duration (hours):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'frequency', message: 'Enter frequency:', validate: input => !isNaN(input) }
                ]).then(({ level, duration, frequency }) => {
                    const result = stressEstimator(parseInt(level), parseInt(duration), parseInt(frequency));
                    clipboardy.writeSync(result.toString());
                    
                    console.log('Result copied to clipboard!');
                });
                break;
            case "workoutPlanGenerator":
                inquirer.prompt([
                    { type: 'input', name: 'daysPerWeek', message: 'Enter days per week:', validate: input => !isNaN(input) },
                    { type: 'input', name: 'duration', message: 'Enter duration per workout:', validate: input => !isNaN(input) },
                    { type: 'input', name: 'type', message: 'Enter type of workout:' }
                ]).then(({ daysPerWeek, duration, type }) => {
                    const result = workoutPlanGenerator(parseInt(daysPerWeek), duration, type);
                    clipboardy.writeSync(result.toString());
                    
                    console.log('Result copied to clipboard!');
                });
                break;
            case "vo2MaxEstimation":
                inquirer.prompt([
                    { type: 'input', name: 'runTime', message: 'Enter run time (minutes):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'distance', message: 'Enter distance (km):', validate: input => !isNaN(input) }
                ]).then(({ runTime, distance }) => {
                    const result = vo2MaxEstimation(parseFloat(runTime), parseFloat(distance));
                    clipboardy.writeSync(result.toString());
                    
                    console.log('Result copied to clipboard!');
                });
                break;
            case "bodyFatPercentage":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight (kg):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'height', message: 'Enter height (cm):', validate: input => !isNaN(input) }
                ]).then(({ weight, height }) => {
                    const result = bodyFatPercentage(parseFloat(weight), parseFloat(height));
                    clipboardy.writeSync(result.toString());
                    
                    console.log('Result copied to clipboard!');
                });
                break;
            case "hydrationNeeds":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight (kg):', validate: input => !isNaN(input) }
                ]).then(({ weight }) => {
                    const result = hydrationNeeds(parseFloat(weight));
                    clipboardy.writeSync(result.toString());
                    
                    console.log('Result copied to clipboard!');
                });
                break;
            case "calorieCalculator":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight (kg):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'height', message: 'Enter height (cm):', validate: input => !isNaN(input) }
                ]).then(({ weight, height }) => {
                    const result = calorieCalculator(parseFloat(weight), parseFloat(height));
                    clipboardy.writeSync(result.toString());
                  
                    console.log('Result copied to clipboard!');
                });
                break;
            case "heartRateZones":
                inquirer.prompt([
                    { type: 'input', name: 'age', message: 'Enter age:', validate: input => !isNaN(input) }
                ]).then(({ age }) => {
                    const result = heartRateZones(parseInt(age));
                    clipboardy.writeSync(result.toString());
                   
                    console.log('Result copied to clipboard!');
                });
                break;
            case "macrosCalculation":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight (kg):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'height', message: 'Enter height (cm):', validate: input => !isNaN(input) }
                ]).then(({ weight, height }) => {
                    const result = macrosCalculation(parseFloat(weight), parseFloat(height));
                    clipboardy.writeSync(result.toString());
                   
                    console.log('Result copied to clipboard!');
                });
                break;
            case "oneRepMax":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight lifted (kg):', validate: input => !isNaN(input) },
                    { type: 'input', name: 'reps', message: 'Enter number of repetitions:', validate: input => !isNaN(input) }
                ]).then(({ weight, reps }) => {
                    const result = oneRepMax(parseFloat(weight), parseInt(reps));
                    clipboardy.writeSync(result.toString());
                   
                    console.log('Result copied to clipboard!');
                });
                break;
            default:
                console.log("Invalid function name");
                break;
        }
    });
}



promptUser();
