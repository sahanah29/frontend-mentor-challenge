function featuresDropdown(){
    console.log("features dropdown clicked");
    document.getElementById("featuresList").classList.toggle("show");
}

function companyDropdown(){
    console.log("company dropdown clicked");
    document.getElementById("companyList").classList.toggle("show");
}

window.onclick = function(event) {

    if (document.getElementById("featuresList").classList.contains("show") && !event.target.matches('#featuresDrop')) {
        document.getElementById("featuresList").classList.remove("show");}
    if (document.getElementById("companyList").classList.contains("show") && !event.target.matches('#companyDrop')) {
        document.getElementById("companyList").classList.remove("show");
    }

  }

function mobileNav(){
    console.log("mobile nav");
    document.getElementById("mobile-nav").hidden = false;
}

function closeButton(){
    document.getElementById("mobile-nav").hidden = true;
}


  
