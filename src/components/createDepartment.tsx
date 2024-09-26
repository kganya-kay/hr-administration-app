import { useState } from "react"
import {api} from "../utils/api"
import SelectManagers from "./SelectManagers"



export default function CreateEmployee() {
    const [name, setName]=useState('')

    const [manager, setManager]=useState('Super User')
    const [status, setStatus]=useState(true)

    const getManager = (value: string) => {
      setManager(value);
      
    };
    console.log(manager)
    const {mutate} = api.department.create.useMutation()

    return (
    <>
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create New Department
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e)=>{
            e.preventDefault()
            const newDepartment = 
            { 
                id:"",
                name,
                status, 
                manager,      
            }

             mutate(newDepartment)        
            
            }
          } 
          action="#" method="POST" className="space-y-6">
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Department Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="string"
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
              <SelectManagers callback={getManager} />
              </div>
            </div>

            <div>
               
                <div className="relative mt-2 rounded-md shadow-sm">
                  
                  <input
                    id="status"
                    name="status"
                    type="button"
                    placeholder="status"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    
                  <select
                    onChange={(e) => {
                      e.target.value === "Active"
                        ? setStatus(true)
                        : setStatus(false);
                    }}
                    id="status"
                    name="status"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  </div>
                </div>
            </div>


            <div className="columns-2">
              <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create
                  </button>
              </div>
              <div>
                  <button
                    type="reset"
                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Cancel
                  </button>
              </div>
              
              
            </div>
          </form>
        </div>
      </div>
    
    </>
  )
}
