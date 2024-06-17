# To use this script
# cmd: ./getimg.ps1 fileUrl fileName
# Then the file download based on terminal location with second argument aligned name.

$url = [string]$args[0]
$currentDir = Get-Location
$suffix =  Split-Path -Leaf $url
$suffixarr = $suffix -split '\.'
$extension = "." + $suffixarr[1]
$outputFilePath = Join-Path -Path $currentDir -ChildPath ($args[1] + $extension)

Invoke-WebRequest -Uri $url -OutFile $outputFilePath
