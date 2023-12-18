function carregar () 
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg. innerHTML =`Agora são ${hora} horas`
    
    if (hora > 0 && hora < 12)
    {
        img.src='manha_1.png'
        document.body.style.background = '#ffe253'
    }
    else if (hora >= 12 && hora<=18 )
{
    img.src='tarde_1.png'
    document.body.style.background = '#ff5c02'
}
else 
{
    img.src='noite.png'
    document.body.style.background = '#8b3248'
}
}
