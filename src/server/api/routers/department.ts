import { z } from "zod";
import { createDepartmentSchema } from "~/types";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const demoUser = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export const departmentRouter = createTRPCRouter({

  all: protectedProcedure.query(async({ctx}) => {
    const departments = await ctx.db.department.findMany();
   
    return  departments.map(({id,name,status})=>({id,name,status}))
  }),

  create: protectedProcedure.input(createDepartmentSchema).mutation(async ({ ctx, input }) => {
    return ctx.db.department.create({
      data:
      {
        
        name:input.name,
        status:input.status,
       
      }
    });
  }),
  

  delete: protectedProcedure.input(z.string().min(1).max(50)).mutation(async ({ctx,input}) => {
    return ctx.db.department.delete({
     where: {
        id: input
      }
    })
  }),

  toggle: protectedProcedure.input(z.object({
    id:z.string(),
    status: z.boolean()
  })).mutation(async ({ctx,input}) => {
    return ctx.db.department.update({
      where:{
        id:input.id,
      },
      data: {
        status:input.status
      }
    })
  })
  
});
