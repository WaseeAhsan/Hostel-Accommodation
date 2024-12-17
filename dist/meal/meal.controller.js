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
exports.MealController = void 0;
const common_1 = require("@nestjs/common");
const meal_service_1 = require("./meal.service");
let MealController = class MealController {
    constructor(mealService) {
        this.mealService = mealService;
    }
    getMealDetails() {
        return this.mealService.getAllMeals();
    }
    async addMeal(mealData) {
        if (!mealData.mealPackageName || typeof mealData.mealPackageName !== 'string') {
            return { message: "Invalid meal package name." };
        }
        if (!mealData.mealPrice || typeof mealData.mealPrice !== 'number') {
            return { message: "Invalid meal price." };
        }
        return this.mealService.addNewMeal(mealData);
    }
    async getMealById(mealId) {
        if (!mealId || isNaN(Number(mealId))) {
            return { message: "Invalid meal ID." };
        }
        return this.mealService.getSearchMeal(mealId);
    }
    async updateMeal(mealId, updatedMeal) {
        if (updatedMeal.mealPackageName && typeof updatedMeal.mealPackageName !== 'string') {
            return { message: "Invalid meal package name." };
        }
        if (updatedMeal.mealPrice && typeof updatedMeal.mealPrice !== 'number') {
            return { message: "Invalid meal price." };
        }
        return this.mealService.updateMeal(mealId, updatedMeal);
    }
    async deleteMeal(mealId) {
        if (!mealId || isNaN(Number(mealId))) {
            return { message: "Invalid meal ID." };
        }
        return this.mealService.deleteMeal(mealId);
    }
};
exports.MealController = MealController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MealController.prototype, "getMealDetails", null);
__decorate([
    (0, common_1.Post)('/addNewMeal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "addMeal", null);
__decorate([
    (0, common_1.Get)('/searchMeal/:mealId'),
    __param(0, (0, common_1.Param)('mealId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "getMealById", null);
__decorate([
    (0, common_1.Put)('/updateMeal/:mealId'),
    __param(0, (0, common_1.Param)('mealId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "updateMeal", null);
__decorate([
    (0, common_1.Delete)(':mealId'),
    __param(0, (0, common_1.Param)('mealId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MealController.prototype, "deleteMeal", null);
exports.MealController = MealController = __decorate([
    (0, common_1.Controller)('/meals'),
    __metadata("design:paramtypes", [meal_service_1.MealService])
], MealController);
//# sourceMappingURL=meal.controller.js.map