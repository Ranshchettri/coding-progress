namespace MyCSharpApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Wap to check whether a number is prime or composite
            // int number;
            // Console.WriteLine("Enter a number : ");
            // number = Convert.ToInt32(Console.ReadLine());
            // if(number == 1)
            //     Console.WriteLine("1 is neither prime nor composite");
            // else if (IsPrime(number))
            //     Console.WriteLine($"{number} is Prime Number.");
            // else 
            //     Console.WriteLine($"{number} is Composite Number.");

            int startNumber, endNumber, count, i;
            Console.WriteLine("Enter 1st number : ");
            startNumber = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter 2nd number : ");
            endNumber = Convert.ToInt32(Console.ReadLine());
            for (i = startNumber; i < endNumber; i++)
            {
                if(IsPrime(i)){
                    Console.Write($"{i}\t");
                }
ll
            }
            for (i = startNumber, count = 0; i < endNumber; i++)
            {
                if(IsPrime(i))
                    count++;
            }
            Console.WriteLine($"No of prime numbers in the range is : {count}");
        }
        static bool IsPrime(int number)
        {
            for (int i = 2; i < number; i++)
            {
                if (number % i == 0)
                    return false;
            }
            return true;
        }
    }
}