// src/utils/macroCalculator.js

export function calculateMacros(age, heightCm, weightKg, gender, goal) {
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    let totalCalories = bmr * 1.2; // Assuming sedentary activity level

    if (goal === 'lose') {
        totalCalories -= 500;
    } else if (goal === 'gain') {
        totalCalories += 500;
    }

    const proteinGrams = weightKg * 1.8;
    const fatGrams = (totalCalories * 0.25) / 9;
    const remainingCalories = totalCalories - (proteinGrams * 4 + fatGrams * 9);
    const carbsGrams = remainingCalories / 4;

    return {
        calories: Math.round(totalCalories),
        protein: Math.round(proteinGrams),
        fat: Math.round(fatGrams),
        carbs: Math.round(carbsGrams),
    };
}
