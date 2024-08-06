import { APIRequestContext, request } from "@playwright/test";

class ApiController{
    private fakerAPI:APIRequestContext;
/*
async poor(){
    this.fakerAPI= await request.newContext({
        'baseURL':'https://jsonplaceholder.typicode.com/'
    });
}*/
async getUsers(){
    this.fakerAPI= await request.newContext({
        'baseURL':'https://jsonplaceholder.typicode.com/'
    });
    const rP = await this.fakerAPI.get('users');
    const responseBody= await rP.json();
    return responseBody[0];
}

async createUser(){
    this.fakerAPI= await request.newContext({
        'baseURL':'https://jsonplaceholder.typicode.com/'
    });
    const postResponse1 = await this.fakerAPI.post('/users/1/',{
        "data":{
            "title":"learn poorna",
            "completed":"false"
        }
    
    })

    const postResponseBody=await postResponse1.json();
    return postResponseBody;
}

}
export default new ApiController();