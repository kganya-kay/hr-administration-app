import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import type { Employee } from "~/types";
import {api} from "../utils/api"
import { useSession } from "next-auth/react";

function editEmployee(){
  console.log("edit")
}

export default function Dashboard() {
  const { data: sessionData } = useSession();
  
  const {data: employees, isLoading, isError} = api.employee.one.useQuery({email:sessionData?.user.email!});
  
  console.log(employees)
  return (
    <Card >
      <CardActionArea >
        
        <div className="flex justify-center rounded-full">
          <img className="rounded-full p-5" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" height="140" alt="user Image" />
        </div>
        <CardContent className="">
          <label htmlFor="">Name</label>
          <Typography gutterBottom variant="h5" component="div" className="py-5 border-y mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {!isLoading ? employees![0]?.name : "Loading Name"}
          </Typography>
          <label htmlFor="">Email</label>
          <Typography gutterBottom variant="h6" component="div" className="py-5 border-y mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {!isLoading ? employees![0]?.email : "Loading email"}
          </Typography>
          <label htmlFor="">Contact Number</label>
          <Typography gutterBottom variant="h6" component="div" className="py-5 border-y mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {!isLoading ? employees![0]?.contactNumber : "Loading Name"}
          </Typography>
          <label htmlFor="">Manager</label>
          <Typography gutterBottom variant="h6" component="div" className="py-5 border-ymt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {!isLoading ? employees![0]?.manager : "Loading Name"}
          </Typography>
          <label htmlFor="">Department</label>
          <Typography gutterBottom variant="h6" component="div" className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 py-5 border-y">
            {!isLoading ? employees![0]?.department : "Loading Department"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} className="py-5 border-y mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Employees Description, bio and comments
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="flex justify-center bg-slate-500 text-cyan-50">
        <Button href="./employees" onClick={editEmployee} color="inherit">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
