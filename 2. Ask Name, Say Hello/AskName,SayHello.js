var stdIn = WScript.StdIn
var stdOut = WScript.StdOut

stdOut.WriteLine("Name?");
	
while (!stdIn.AtEndOfStream)
{

	var str = stdIn.ReadLine()
	
	stdOut.WriteLine("Hello " + str);
}