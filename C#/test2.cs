namespeace InheritanceExample
    public class program
{
  public static void main (string[]args)
  {
    vehical v = new vehical ("v1002");
    v.display();
    v = new Truck (1005,"Truck1003")
    v.display();
  }
 
}
     public class vehical
     { 
       protected string vehicalNo=null!;
       protected string brand=null!;
       protected float fuelCapacity;
       public vehical(string vehicaleNo)
     }
        public class Truck : Vehicle
        {
            fuelCapacity =0;
            this. behicalNo = vehicaleNo;
            {
                maximumLoadCapacity=0;
                feulCapacity;
                vehicalNo="Not register.";
                brand ="No Brand";
            }
            public  void setLoadCapacity (float maxCapacity)
            {
                maximumLoadCapacity=maxCapacity;
            }
            public float getLoadCapacity()
        } 