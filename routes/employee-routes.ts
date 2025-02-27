import express from "express";
import {
    EmployeeAdd,
    EmployeeDelete, EmployeeUpdate, getAllEmployee
} from "../database/prisma-data-store";
import Employee from "../model/Employee";

const router = express.Router();

router.post("/addEmployee", async(req, res) => {
    console.log(req.body);
    const employee: Employee= req.body;
    try{
        const addedEmployee = await EmployeeAdd(employee);
        res.json(addedEmployee);
    }catch(err){
        console.log("error adding employee", err);
        res.status(400).send("error adding employee");
    }
})

router.delete("/deleteEmployee/:email", async (req, res) => {
    const email: string  = req.params.email;
    try{
        const deleteEmployee = await EmployeeDelete(email);
        res.json(deleteEmployee);
    }catch(err){
        console.log("error deleting employee", err);
    }
})


router.put("/updateEmployee/:id",async (req, res) => {
    const id:number =+ req.params.id;
    const employee : Employee = req.body;

    try{
        const updateEmployee = await EmployeeUpdate(id, employee);
        res.json(updateEmployee);
    }catch(err){
        console.log("error updating employee", err);
    }
})

router.get("/viewEmployee", async (req, res) => {
    try{
       const employee=  await getAllEmployee();
       res.json(employee);
    }catch(err){
        console.log("error getting employee", err);
    }
})
export default router;