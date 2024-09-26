import type { Department } from "~/types";

type DepartmentProps = {
  department: Department;
};

export default function Department({ department }: DepartmentProps) {
  const { id, name, status } = department;
  return (
    <>
      <div className="border-y ">
        <div className="flex min-w-0 justify-center gap-x-4 ">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {department.name}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {department.status}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {department.manager}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{status}</p>
          {status ? (
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <p className="text-xs leading-5 text-gray-500">Active</p>
            </div>
          ) : (
            <p className="mt-1 text-xs leading-5 text-gray-500">Inactive</p>
          )}
        </div>
      </div>
    </>
  );
}
