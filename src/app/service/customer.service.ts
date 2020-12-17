import { resolve } from "../../../webpack.config";
import { Customer } from "../model/customer";

let customers: Array<Customer> = [];
let loaded = false;

export function getAllCustomers(): Promise <Array<Customer>>{

    return new Promise((resolve,reject)=>{

    if(!loaded){

        /*let http = new XMLHttpRequest();

        http.onreadystatechange = function(){
            if(http.readyState === 4 ){
                console.log("Onna customers la awaaa"); 

                customers = JSON.parse(http.responseText);
                loaded = true; 
                resolve(customers);

                // if(http.responseXML){
                //     let dom = $(http.responseXML);
                //     $(dom).find("customers customer").each((index,elm)=>{
                //         let id = $(elm).find("id").text();
                //         let name = $(elm).find("name").text();
                //         let address = $(elm).find("address").text();
                //         customers.push(new Customer(id,name,address));
                //   });
                // resolve(customers);

                // }
            }
        }

        http.open('GET','http://localhost:8080/pos/customers',true);

        http.send();*/

    $.ajax({
        method:"GET",
        url:'http://localhost:8080/pos/customers'
    }).then((data)=>{
        customers = data;
        loaded = true; 
        resolve(customers);
    }).catch(()=>{
        reject();
    })
    }else{
        resolve(customers);
    }

    });
    
}

export function saveCustomer(customer: Customer):Promise<void>{

    return new Promise((resolve, reject)=>{

        /*let http = new XMLHttpRequest();

        http.onreadystatechange = () => {
            if(http.readyState === 4){
                if(http.status == 201){
                    customers.push(customer);
                    resolve();
                }else{
                    reject("Something went wrong");
                }
                
            }
            
        };
        http.open('POST','http://localhost:8080/pos/customers',true);

        http.setRequestHeader('Content-Type','application/json');

        http.send(JSON.stringify(customer));*/

        $.ajax({
            method:"POST",
            url:`http://localhost:8080/pos/customers`,
            contentType:'json',
            data: JSON.stringify(customer)  
        }).then(()=>{
            customers.push(customer);
            resolve();
            
        }).catch(()=>{
            reject();
        })

    });
    
}   

export function deleteCustomer(id: string):Promise<void>{
    return new Promise((resolve, reject)=>{

        // let http = new XMLHttpRequest();

        // http.onreadystatechange = () => {
        //     if(http.readyState == 4){
        //         if(http.status == 204){
        //             customers.splice(customers.findIndex((elm)=>elm.id===id),1);
        //             resolve(); 
        //         }else{
        //             reject("Something went wrong");
        //         }
                
        //     }
        // };
        // http.open('DELETE',`http://localhost:8080/pos/customers?id=${id}`,true);

        // http.send();

        $.ajax({
            method:"DELETE",
            url: `http://localhost:8080/pos/customers?id=${id}`
        }).then(()=>{
            customers.splice(customers.findIndex((elm)=>elm.id===id),1);
            resolve(); 
        }).catch(()=>{
            reject();
        })
    });

}