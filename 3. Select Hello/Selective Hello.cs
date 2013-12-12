using System;

class HelloCsharp
{
       static void Main()
       {
			string Name;
			
			Console.WriteLine("Name?");
			Name = Console.ReadLine ();
            if (Name == "Bob" || Name == "Alice")
				{ DisplayHello (Name);}
			else
				{ Console.WriteLine ("Hello"); }
       }
	   
	   static void DisplayHello(string Name)
	   {
			Console.WriteLine ("Hello " + Name); 
	   }
}