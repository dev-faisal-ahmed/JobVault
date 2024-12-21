import { Router } from "express";
import { authRouter } from "../modules/auth/auth.router";
import { companiesRouter, companyRouter } from "../modules/company/company.router";

export const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/company", companyRouter);
appRouter.use("/companies", companiesRouter);
