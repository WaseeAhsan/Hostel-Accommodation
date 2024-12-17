"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const meal_entity_1 = require("./meal.entity");
let MealService = class MealService {
    constructor(mealRepository) {
        this.mealRepository = mealRepository;
    }
    setMeal_HomePage() {
        return "This is the Meal Page!";
    }
    async getAllMeals() {
        return await this.mealRepository.find();
    }
    async getSearchMeal(id) {
        const meal = await this.mealRepository.findOne({ where: { mealId: Number(id) } });
        return meal || { message: "Meal not found!" };
    }
    async addNewMeal(data) {
        const newMeal = this.mealRepository.create(data);
        await this.mealRepository.save(newMeal);
        return {
            message: "New meal added successfully!",
            data: newMeal,
        };
    }
    async updateMeal(updateId, updatedData) {
        const meal = await this.mealRepository.findOne({ where: { mealId: Number(updateId) } });
        if (!meal) {
            return { message: "Meal not found!" };
        }
        await this.mealRepository.update(meal.mealId, updatedData);
        return {
            message: "Meal updated successfully!",
            updatedMeal: { ...meal, ...updatedData },
        };
    }
    async deleteMeal(id) {
        const meal = await this.mealRepository.findOne({ where: { mealId: Number(id) } });
        if (!meal) {
            return { message: "Meal not found!" };
        }
        await this.mealRepository.delete(meal.mealId);
        return {
            message: `Meal with ID ${id} deleted successfully.`,
            deletedMeal: meal,
        };
    }
};
exports.MealService = MealService;
exports.MealService = MealService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(meal_entity_1.Meal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MealService);
//# sourceMappingURL=meal.service.js.map