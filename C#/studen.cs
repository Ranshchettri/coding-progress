namespace constrductorExample
{
    public class student 
    {
        private int roll;
        private string? name ;
        private int age;
        {
            roll=1;
            name="unknown";
            age=18;
            public string ? getName()
            {
                return this. name;
            }
        }
        private void setRoll (int roll)
        {
            
            if (roll > 0 && roll < 100)
             this. roll =roll;
             elseconsol.writelinkne("Invalid roll number");
        }
           public int getRoll();
    }
}