var stdIn = WScript.StdIn
var str = ""

stdOut.WriteLine("Name?");
	
while (!stdIn.AtEndOfStream)
{
	str = stdIn.ReadLine()
	if (str == "Bob") 
		{sayHello(str)}
	else if (str == "Alice")
		{sayHello(str)}
	else 
		{WScript.Echo ("Hello")}
	
	WScript.Quit();
}

function sayHello (name)
{
	WScript.Echo ("Hello " + name);
}