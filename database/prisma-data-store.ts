import {PrismaClient} from '@prisma/client';
import Customer from "../model/Customer";
import Item from "../model/Item";
import Employee from "../model/Employee";

const prisma = new PrismaClient();

export async function CustomerAdd(c: Customer){
    try{
       const newCustomer  = await prisma.customer.create({
            data:{
                name: c.name,
                email: c.email,
                phone: c.phone,
            }
        })
        console.log('Customer Added :',newCustomer)
        return newCustomer;
    }catch(err) {
        console.log("error adding customer", err);
    }
}

export async function CustomerDelete(email:string) {
    try{
        const deletedCustomer = await prisma.customer.delete({
            where: {email: email}
        });
        console.log('Customer deleted :',email);
        return deletedCustomer;
    }catch(err){
        console.log("error deleting customer", err);
    }
}

export async function getAllCustomers(){
    try{
        return await prisma.customer.findMany();
    }catch(err){
        console.log("error getting customers from prisma data",err);
    }
}

export async function CustomerUpdate(id: number, c: Customer){
    try{
        const updatedCustomer = await prisma.customer.update({
            where:{ email : c.email},
            data:{
                name: c.name,
                phone: c.phone
            }
        })
        console.log('Customer updated :',updatedCustomer);
        return updatedCustomer;
    }catch(err){
        console.log("error updating customer", err);
    }
}

////////////////////////////////////Item////////////////////////////////////
export async function ItemAdd(i: Item){
    try{
        const newItem  = await prisma.item.create({
            data:{
                description: i.description,
                price: i.price,
                qty: i.qty,
            }
        })
        console.log('Item Added :',newItem)
        return newItem;
    }catch(err) {
        console.log("error adding item", err);
    }
}

export async function ItemDelete(description:string) {
    try{
        const deletedItem = await prisma.item.delete({
            where: {description: description}
        });
        console.log('Item deleted :',description);
        return deletedItem;
    }catch(err){
        console.log("error deleting item", err);
    }
}

export async function getAllItems(){
    try{
        return await prisma.item.findMany();
    }catch(err){
        console.log("error getting items from prisma data",err);
    }
}

export async function ItemUpdate(id: number, i: Item){
    try{
        const updatedItem = await prisma.item.update({
            where:{ description : i.description},
            data:{
                price: i.price,
                qty: i.qty
            }
        })
        console.log('Item updated :',updatedItem);
        return updatedItem;
    }catch(err){
        console.log("error updating item", err);
    }
}

////////////////////////////////////Employee////////////////////////////////////
export async function EmployeeAdd(e: Employee){
    try{
        const newEmployee  = await prisma.employee.create({
            data:{
                name: e.name,
                email: e.email,
                position: e.position,
            }
        })
        console.log('Employee Added :',newEmployee)
        return newEmployee;
    }catch(err) {
        console.log("error adding employee", err);
    }
}

export async function EmployeeDelete(email:string) {
    try{
        const deleteEmployee = await prisma.employee.delete({
            where: {email: email}
        });
        console.log('employee deleted :',email);
        return deleteEmployee;
    }catch(err){
        console.log("error deleting employee", err);
    }
}

export async function getAllEmployee(){
    try{
        return await prisma.employee.findMany();
    }catch(err){
        console.log("error getting employees from prisma data",err);
    }
}

export async function EmployeeUpdate(id: number, e: Employee){
    try{
        const updateEmployee = await prisma.employee.update({
            where:{ email : e.email},
            data:{
                name: e.name,
                position: e.position
            }
        })
        console.log('Employee updated :',updateEmployee);
        return updateEmployee;
    }catch(err){
        console.log("error updating employee", err);
    }
}



