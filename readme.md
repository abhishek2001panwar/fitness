# Fitness Utilities

A Node.js package for fitness calculations including BMI, stress estimation, workout planning, VO2 Max, body fat percentage, hydration needs, calorie needs, heart rate zones, macronutrients, and one-rep max estimation.

## Features

- **BMI Calculation**: Calculates Body Mass Index.
- **Stress Estimator**: Estimates stress levels.
- **Workout Plan Generator**: Generates a workout plan.
- **VO2 Max Estimation**: Estimates VO2 Max.
- **Body Fat Percentage**: Calculates body fat percentage.
- **Hydration Needs**: Determines daily hydration needs.
- **Calorie Calculation**: Calculates daily calorie needs.
- **Heart Rate Zones**: Calculates heart rate zones.
- **Macronutrients Calculation**: Calculates daily macronutrient needs.
- **One-Rep Max Estimation**: Estimates one-rep max.

## Installation

###  Install dependencies with npm:

```bash

npm install inquirer clipboardy
``` 

```bash

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
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
                    console.log('Result copied to clipboard!');
                });
                break;
            case "hydrationNeeds":
                inquirer.prompt([
                    { type: 'input', name: 'weight', message: 'Enter weight (kg):', validate: input => !isNaN(input) }
                ]).then(({ weight }) => {
                    const result = hydrationNeeds(parseFloat(weight));
                    clipboardy.writeSync(result.toString());
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
                    console.log('Result copied to clipboard!');
                });
                break;
            case "heartRateZones":
                inquirer.prompt([
                    { type: 'input', name: 'age', message: 'Enter age:', validate: input => !isNaN(input) }
                ]).then(({ age }) => {
                    const result = heartRateZones(parseInt(age));
                    clipboardy.writeSync(result.toString());
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
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
                    console.log(`Result: ${result}`);
                    console.log('Result copied to clipboard!');
                });
                break;
            default:
                console.log("Invalid function name");
                break;
        }
    });
};

promptUser();
```

## Converting to an Executable
 Install pkg Globally:
 
```bash
npm install -g pkg
```

 ## Build Executables:
 ```bash
 pkg script.js -t node14-linux-x64,node14-macos-x64,node14-win-x64
```

## Run the Executable:
```bash
./script-linux    # On Linux
./script-macos    # On macOS
./script-win.exe  # On Windows
```

## License
### MIT License. See the LICENSE file for details.
```bash
This `README.md` provides a comprehensive overview of your project, including features, installation steps, usage instructions, and how to convert the script to an executable.
```
