function tabActivate(evt, tabName) {
    
    // simple tabbed menu js function
    var i, tabcontent, tablinks;
    
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" current", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " current";
}
