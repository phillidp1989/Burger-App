$(document).ready(() => {

    // Add event listener on Devour button
    $("#devour").on("click", async event => {
        console.log(event.target);
        const id = $(event.target).data("id");
        try {
            await $.ajax("/api/burger/" + id, {
                type: "PUT",
            });
            location.reload();
        } catch (err) {
            console.log("ERROR - script.js - ajax-PUT: ", err);
        }

    });

    // Make post request when new burger name is submitted

    $(".burger-form").on("submit", async event => {
        event.preventDefault();
        const newBurger = $(".user-input").val();
        const addedBurger = {
            burgerName: newBurger
        };
        try {
            await $.ajax("/api/burger", {
                type: "POST",
                data: addedBurger
            });
            location.reload();    
        } catch (err) {
            console.log("ERROR - script.js - ajax-PUT: ", err);
        }
        
    })
})