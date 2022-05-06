class UberPrice{
    constructor(CRD,SBM,basefare,CPM,TR,ridedistance,bookingfee){
        
/* CRD=COST OF RIDE PER MILE
TR=TIME OF RIDE
CPM=COST PER MINUTE
SBM=SURGE MULTIPLIER
*/




        this.CRD=CRD;
        this.SBM=SBM;
        this.basefare=basefare;
        this.CPM=CPM;
        this.TR=TR;
        this.ridedistance=ridedistance
        this.bookingfee=bookingfee;

    }
    getprice(){
        console.log(" UBER PRICE IS "+(this.basefare + ((this.CPM * this.TR) + (this.CRD* this.ridedistance) *this.SBM) + this.bookingfee ))
    }
    
     setprice(newCRD,newSBM,newbasefare,newCPM,newTR,newridedistance,newbookingfee){
            
            this.CRD=newCRD;
            this.SBM=newSBM;
            this.basefare=newbasefare;
            this.CPM=newCPM;
            this.TR=newTR;
            this.ridedistance=newridedistance
            this.bookingfee=newbookingfee;
    
        }    
}
var cost1=new UberPrice();
cost1.setprice(100,5,20,15,10,3,20)
cost1.getprice()


//RESULTS
// UBER PRICE IS 1690
