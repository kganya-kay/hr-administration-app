import { api } from "../utils/api";
import CreateEmployeeAccordion from "./createEmployeeAccordion";
import CreateEmployee from "./CreateEmployee";
import Employee from "./Employee";

export default function Employees() {
  const { data: employees, isLoading, isError } = api.employee.all.useQuery();
  if (isLoading) return <div>Loading Employees...</div>;
  if (isError) return <div>Error Fetching Employees</div>;

  return (
    <>
      <CreateEmployeeAccordion />
      <br />
      {employees?.length ? (
        employees?.map((employee) => {
          return <Employee key={employee.id} employee={employee} />;
        })
      ) : (
        <div>
          <p>"Create Your First Employee"</p>
          <CreateEmployee />
        </div>
      )}
    </>
  );
}
