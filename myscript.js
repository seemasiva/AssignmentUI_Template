function toggleNavbar() {
    var sidebar = document.getElementsByClassName('sideBarContainer')[0];
    var sectionContainer = document.getElementsByClassName('sectionConatiner')[0];
    
    if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sectionContainer.classList.remove('sidebar-opened');
    } else {
        sidebar.classList.add('sidebar-open');
        sectionContainer.classList.add('sidebar-opened');
    }
    
    console.log('Computed margin-top:', window.getComputedStyle(sectionContainer).marginTop);
}