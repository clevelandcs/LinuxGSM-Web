$(document).ready(function () {
    $("#menu-toggle, #menu-toggle2").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".sidebar-nav").fadeToggle();
    });
    $("#List-Servers").click(function (e) {
        e.preventDefault();
        console.log("Calling get serverlist");
        socket.emit('serverList');
        console.log("serversList = " + serverList);
        serverList.array.forEach(element => {
            $("#server-select").add('<a class="dropdown-item" href="#">' + element.serverName + '</a>');
        });
    });
});