import { MealService } from './meal.service';
export declare class MealController {
    private readonly mealService;
    constructor(mealService: MealService);
    getMealDetails(): Promise<import("./meal.entity").Meal[]>;
    addMeal(mealData: {
        mealPackageName: string;
        mealPrice: number;
        mealDetails?: string;
    }): Promise<{
        message: string;
        data: import("./meal.entity").Meal[];
    } | {
        message: string;
    }>;
    getMealById(mealId: string): Promise<import("./meal.entity").Meal | {
        message: string;
    }>;
    updateMeal(mealId: string, updatedMeal: {
        mealPackageName?: string;
        mealPrice?: number;
        mealDetails?: string;
    }): Promise<{
        message: string;
        updatedMeal: any;
    } | {
        message: string;
    }>;
    deleteMeal(mealId: string): Promise<{
        message: string;
        deletedMeal: import("./meal.entity").Meal;
    } | {
        message: string;
    }>;
}
