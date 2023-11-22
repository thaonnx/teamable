function  handleEditProfile (){
    document.getElementById("input-name").value = document.getElementById("name").textContent
    var email = document.getElementById("email").textContent
    var inputEmail = document.getElementById("input-email")
    inputEmail.value = email


    var interest = document.getElementById("interest").textContent
    var inputInterest = document.getElementById("input-interest")
    inputInterest.value = interest

    document.getElementById("edit").style.display="block"
    document.getElementById("display").style.display="none"
}

function handleSaveProfile (){
    var updateName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updateName

    var updateEmail = document.getElementById("input-email").value
    var name = document.getElementById("email")
    

    name.textContent = updateEmail

    var updateInterest = document.getElementById("input-interest").value
    var name = document.getElementById("interest")
    name.textContent = updateInterest

    document.getElementById("display").style.display="block"
    document.getElementById("edit").style.display="none"
}