// import Customer from "../model/Customer";
//
// let customers : Customer[] = [];
//
// export function addCustomer(customer: Customer) {
//     customers.push(customer);
// }
//
// export function getCustomers() {
//     return customers;
// }
//
// export function deleteCustomer(id: number) {
//     customers = customers.filter(customer => customer.id !== id);
// }
//
// export function updateCustomer(id: number, c: Customer) {
//     customers.map((customer: Customer) => {
//         if(customer.id === id) {
//             customer.name = c.name;
//             customer.email = c.email;
//         }
//     })
// }

// import {PrismaClient} from '@prisma/client';
// import Item from "../model/Item";
//
// const prisma = new PrismaClient();
//
// export async function ItemAdd(i: Item){
//     try{
//         const newItem  = await prisma.item.create({
//             data:{
//                 description: i.description,
//                 price: i.price,
//                 qty: i.qty,
//             }
//         })
//         console.log('Item Added :',newItem)
//         return newItem;
//     }catch(err) {
//         console.log("error adding item", err);
//     }
// }
//
// export async function ItemDelete(description:string) {
//     try{
//         const deletedItem = await prisma.item.delete({
//             where: {description: description}
//         });
//         console.log('Item deleted :',description);
//         return deletedItem;
//     }catch(err){
//         console.log("error deleting item", err);
//     }
// }
