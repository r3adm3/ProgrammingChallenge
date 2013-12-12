$name = read-host "Name please?"

if ($name -eq "Bob") {write-host "Hello Bob"}
elseif ($name -eq "Alice") {write-host "Hello Alice"}
else{write-host "Hello"}