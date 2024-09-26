import {api} from "../utils/api"
import Department from "./Department"
import CreateDepartmentAccordion from '~/components/createDepartmentAccordion'

export default function Departments() {

    const {data: departments, isLoading, isError} = api.department.all.useQuery();
    if(isLoading) return <div>Loading Departments...</div>
    if(isError) return <div>Error Fetching Departments</div>

  return (
    <>
        <CreateDepartmentAccordion/>
        <br />
        {
            

            departments?.length ? departments?.map(department =>{
                return <Department key={department.id} department={department}/>
            })
            :
            <div>
                <p>"Create Your First Department"</p>
                <br />
                <CreateDepartmentAccordion/>
            </div>
        }

        
    </>
  )
}
