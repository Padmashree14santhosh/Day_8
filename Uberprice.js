class Uberprice {
    static BaseFare = 10;
    static CostPerMile = 5;
    static CostPerMinute = 3;
    static BookingFee = 5;
    constructor(time=1,mile=1){
        this.time=time;
        this.mile=mile;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(`the total price is ${(Uberprice.BaseFare)+(Uberprice.BookingFee)+((Uberprice.CostPerMinute)*time)+((Uberprice.CostPerMile)*mile)}`);
    }
}
let vehicle = new Uberprice();
vehicle.totalPrice(34,12);
vehicle.totalPrice(12,14);
