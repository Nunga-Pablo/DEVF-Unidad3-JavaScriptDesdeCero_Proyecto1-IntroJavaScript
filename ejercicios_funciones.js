function areaTriangulo(base, altura)
{
    return (base*altura)/(2);
}

console.log(areaTriangulo(4,6));

function areaRectangulo(base, altura)
{
    return (base*altura);
}

console.log(areaRectangulo(2,3));

function areaCirculo(radio)
{
    const pi = 3.141592654;
    return (pi*(radio*radio));
}

console.log(areaCirculo(5));

function gradosCaF(C)
{
    return (C*9/5 + 32);
}

console.log(gradosCaF(100));

function esParoNo(numero)
{
    if(numero%2 == 0)
    {
        console.log(numero + " es par")
    }
    else
    {
        console.log(numero + " es impar")
    }
}

esParoNo(15);