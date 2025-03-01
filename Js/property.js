AFRAME.registerComponent("home-view", {
    init: function() {
      this.createPlaces();
    },
    tick: function() {
      const placesContainer = document.querySelector("#item-container");
  
      const { state } = placesContainer.getAttribute("tour");
  
      if (state === "view" || state === "change-view") {
  
        this.el.setAttribute("visible", true);
      } else {
        this.el.setAttribute("visible", false);
      }
    },
    createPlaces: function() {
      const homeViewContainer = document.querySelector(
        "#home-view-container"
      );
  
      let prevoiusXPosition = -150;
      let prevoiusYPosition = 30;
  
      for (var i = 1; i <= 4; i++) {
        const position = {
          x: (prevoiusXPosition += 50),
          y: (prevoiusYPosition += 2),
          z: -40
        };
        const entityEl = this.createPlaceThumbNail(position, i);
        homeViewContainer.appendChild(entityEl);
      }
    },
    createPlaceThumbNail: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `place-${id}`);
  
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 2.5
      });
  
      entityEl.setAttribute("material", {
        src: "./assets/house.png",
        opacity: 0.9
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("cursor-event", {});
  
      return entityEl;
    }
  });
  