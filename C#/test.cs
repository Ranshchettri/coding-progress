// wap to reverse a string withou using librery function 

namespace ReverseString 
{
    class Program
    {
       public static void Main(string[] args)
       {
        cosole.WriteLine("Enter a string : ");
        string my String=Convert.ToString(Console.ReadLine())??string.Empty;
        console.writeline("Reaverse string is : "+ReverseString(myStr));
        
       }
       public static string ReverseString(string myStr){
        string rev= string.Empty;
        for(int i=myStr.Length-1;i>=0;i--)


        {
            rev+=myStr[i];
       }
       
       } 
 }
}
