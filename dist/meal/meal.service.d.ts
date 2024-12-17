import { Repository } from 'typeorm';
import { Meal } from './meal.entity';
export declare class MealService {
    private readonly mealRepository;
    constructor(mealRepository: Repository<Meal>);
    setMeal_HomePage(): string;
    getAllMeals(): Promise<Meal[]>;
    getSearchMeal(id: string): Promise<Meal | {
        message: string;
    }>;
    addNewMeal(data: any): Promise<{
        message: string;
        data: Meal[];
    }>;
    updateMeal(updateId: string, updatedData: any): Promise<{
        message: string;
        updatedMeal?: undefined;
    } | {
        message: string;
        updatedMeal: any;
    }>;
    deleteMeal(id: string): Promise<{
        message: string;
        deletedMeal?: undefined;
    } | {
        message: string;
        deletedMeal: Meal;
    }>;
}
