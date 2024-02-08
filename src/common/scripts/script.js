const options = $(".inputs"),
    values = $(".value"),
    body = $("body"),
    background = [
        "./assets/images/bg1.jpg",
        "./assets/images/bg2.jpg",
        "./assets/images/bg3.jpg",
        "./assets/images/bg4.jpg",
        "./assets/images/bg5.jpg",
        "./assets/images/bg6.jpg",
        "./assets/images/bg7.jpg",
        "./assets/images/bg8.jpg",
        "./assets/images/bg9.jpg",
        "./assets/images/bg10.jpg",
    ];
let randomNumber;

$(window).on("load", () => {
    randomNumber = Math.floor(Math.random() * background.length);
    body.css("cssText", `background: url(${background[randomNumber]}) no-repeat center / cover;`);
    Swal.fire ({
       icon: "info",
       title: "Pay Attention !",
       html: "<p>If background music didn't play</p><br><p>Make sure your browser allowed the autoplay media.</p>"
    });
    setInterval(() => {
       randomNumber = Math.floor(Math.random() * background.length);
       body.css("cssText", `background: url(${background[randomNumber]}) no-repeat center / cover;`);
    }, 3000);
});

options.click((event) => {
    if (event.target.id === "young") {
        $(values[0]).css("width", "100%");
        $(values[1]).css("width", "5%");
        $(values[2]).css("width", "100%");
        $(event.target.firstElementChild).removeClass("hidden");
        $(options[1].firstElementChild).addClass("hidden");
        $(options[2].firstElementChild).addClass("hidden");
    }
    else if (event.target.id === "adult") {
        $(values[0]).css("width", "5%");
        $(values[1]).css("width", "100%");
        $(values[2]).css("width", "100%");
        $(event.target.firstElementChild).removeClass("hidden");
        $(options[0].firstElementChild).addClass("hidden");
        $(options[2].firstElementChild).addClass("hidden");
    }
    else if (event.target.id === "old") {
        $(values[0]).css("width", "100%");
        $(values[1]).css("width", "100%");
        $(values[2]).css("width", "5%");
        $(event.target.firstElementChild).removeClass("hidden");
        $(options[0].firstElementChild).addClass("hidden");
        $(options[1].firstElementChild).addClass("hidden");
    }
});