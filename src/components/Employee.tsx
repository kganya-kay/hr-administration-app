import type { Employee } from "~/types";

type EmployeeProps = {
  employee: Employee;
};

export default function Employee({ employee }: EmployeeProps) {
  const { id, name, lastName, contactNumber, status, email, image } = employee;
  return (
    <>
      <div className="border-y border-slate-50">
        <div className="flex min-w-0 justify-center gap-x-4 pt-3">
          <img
            alt=""
            src={image!}
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {name}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {lastName}
            </p>
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
            <div className="bg-grey-500/20 flex-none rounded-full p-1">
              <div className="bg-grey-500 h-1.5 w-1.5 rounded-full" />
              <p className="mt-1 text-xs leading-5 text-gray-500">Inactive</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
