import { resolve } from "../../../webpack.config";
import { Item } from "../model/item";


let items: Array<Item> = [];
let loaded = false;

export function getAllItems(): Promise <Array<Item>>{

    return new Promise((resolve,reject)=>{

        if(!loaded){
           /* let http = new XMLHttpRequest();

            http.onreadystatechange = function(){
                if(http.readyState === 4 ){
                    console.log("Onna Items la awaaa"); 
        
                    items = JSON.parse(http.responseText);
                    loaded = true;
                    resolve(items);
        
                //     if(http.responseXML){
                //         let dom = $(http.responseXML);
                //         $(dom).find("items item").each((index,elm)=>{
                //             let code = $(elm).find("code").text();
                //             let description = $(elm).find("description").text();
                //             let qtyOnHand = $(elm).find("qtyOnHand").text();
                //             let price = $(elm).find("price").text();
                //             items.push(new Item(code,description,+qtyOnHand,price));
                //       });
                //     resolve(items);
                // }
            }
                
            }
        
            http.open('GET','http://localhost:8080/pos/items',true);
        
            http.send();*/
            $.ajax({
                method:"GET",
                url:'http://localhost:8080/pos/items'
            }).then((data)=>{
                items = data;
                loaded = true; 
                resolve(items);
            }).catch(()=>{
                reject();
            })
               

        }else{
            resolve(items);
        }

    });
}

export function saveItem(item: Item):Promise<void>{

    return new Promise((resolve, reject)=>{

        /*let http = new XMLHttpRequest();

        http.onreadystatechange = () => {
            if(http.readyState === 4){
                let success =  JSON.parse(http.responseText);
                if(success){
                    items.unshift(item);
                }
                resolve(success);
            }
            
        };
        http.open('POST','http://localhost:8080/pos/items',true);

        http.setRequestHeader('Content-Type','application/json');

        http.send(JSON.stringify(item));*/

        $.ajax({
            method:"POST",
            url:`http://localhost:8080/pos/items`,
            contentType:'json',
            data: JSON.stringify(item)  
        }).then(()=>{
            items.push(item);
            resolve();
            
        }).catch(()=>{
            reject();
        })
    });
    
}   

export function deleteItem(code: string):Promise<void>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            method:"DELETE",
            url: `http://localhost:8080/pos/items?item_code=${code}`
        }).then(()=>{
            items.splice(items.findIndex((elm)=>elm.code===code),1);
            resolve(); 
        }).catch(()=>{
            reject();
        })
    });

}