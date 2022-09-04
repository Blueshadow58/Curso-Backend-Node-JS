class Product {
    id: BigInteger;    
    timestamp: number;
    name: string;
    description: string;
    

    constructor(id:BigInteger,name:string,description:string) {
        this.id = id
        this.timestamp = Date.now()
        this.name = name
        this.description = description

    }
}