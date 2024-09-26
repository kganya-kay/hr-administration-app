import { string, z } from "zod";
import { EmployeeInput, createEmployeeSchema } from "~/types";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { parse } from "querystring";

const demoUser = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const employeeRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const employees = await ctx.db.employee.findMany();
   
    return employees.map(
      ({ id, name, lastName, contactNumber, email, image, status }) => ({
        id,
        name,
        lastName,
        contactNumber,
        email,
        image,
        status
      }),
    );
  }),

  one: protectedProcedure.input(z.object({email:z.string()})).query(async ({ ctx,input }) => {
    const employee = await ctx.db.employee.findMany({
      where: {
        email: input.email
      },
    })
    return employee
  }),

  create: protectedProcedure
    .input(createEmployeeSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.employee.create({
        data: {
          name: input.name,
          lastName: input.lastName,
          contactNumber: input.contactNumber,
          createdBy: ctx.session.user.id,
          user: {
            create: {
              name: input.name,
            },
          },
          image: demoUser.imageUrl,
          email: input.email,
          manager: input.manager,
          status: input.status,
          role: input.role,
          departments: {},
        },
      });
    }),

  delete: protectedProcedure
    .input(z.string().min(1).max(50))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.employee.delete({
        where: {
          id: input,
        },
      });
    }),

  toggle: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.employee.update({
        where: {
          id: input.id,
        },
        data: {
          status: input.status,
        },
      });
    }),
});
