using System;

class HelloCsharp
{
       static void Main()
       {
			string Name;
			
			Console.WriteLine("Name?");
			Name = System.Console.ReadLine ();
            Console.WriteLine ("Hello from C# " + Name);
       }
}