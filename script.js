function a(elem)
{
    console.log("add");
    
    var content = document.getElementById("calc").value;
    
    if(content == "Infinity")
    {
        return document.getElementById("calc").value = elem;    
    }
    else
    {
        return document.getElementById("calc").value = content + elem;    
    }
}
function c()
{
    console.log("clear");
    return document.getElementById("calc").value = "";
}
function e()
{
    console.log("do");
    
    return document.getElementById("calc").value = eval(document.getElementById("calc").value);
}