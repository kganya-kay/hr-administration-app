
import type { inferRouterOutputs } from "@trpc/server";
import type { inferRouterInputs } from "@trpc/server";
import {z} from "zod"
import type { AppRouter } from "./server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type AllEmployeesOutput = RouterOutputs['employee']['all']
type AllDepartmentsOutput = RouterOutputs['department']['all']

type RouterInputs = inferRouterInputs<AppRouter>;

export type Employee = AllEmployeesOutput[number];
export type Department = AllDepartmentsOutput[number];



export const createEmployeeSchema = z.object({
    id:z.string(),
    name:z.string(),
    lastName:z.string(),
    contactNumber: z.number(),
    email:z.string(),
    manager:z.string(),
    department : z.string(),
    role: z.string(),
    status: z.boolean()
})
export type EmployeeInput = z.TypeOf<typeof createEmployeeSchema>

export const createDepartmentSchema = z.object({
    id:z.string(),
    name:z.string(),
    status: z.boolean(),
    manager: z.string(),
})
export type DepartmentInput = z.TypeOf<typeof createDepartmentSchema>