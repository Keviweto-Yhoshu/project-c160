AFRAME.registerComponent("cursor-event", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function() {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleClickEvents: function() {
      //  Click Events
      this.el.addEventListener("click", evt => {
        const placesContainer = document.querySelector("#places-container");
        const { state } = placesContainer.getAttribute("tour");
  
        if (state === "places-list") {
          const id = this.el.getAttribute("id");
          const placesId = [
            "surrounding"
          ];
          if (placesId.includes(id)) {
            placesContainer.setAttribute("tour", {
              state: "view",
              selectedCard: id
            });
          }
        }
      //here
        if (state === "view"){
          this.handleViewState()
        }
        if (state === "change-view"){
          this.handleViewState()
        }
        
      });
    },
    handleViewState:function(){
      const el= this.el
      const id = el.getAttribute("id")
      const placesContainer = document.querySelector("#item-container")
      const {selectedItemId}=placesContainer.getAttribute("cursor-event")
      const sideViewPlacesId = ["place-1"]
      if (sideViewPlacesId.includes(id)){
        placesContainer.setAttribute("tour", {
          state:"change-view"
        })
        const skyEl=document.querySelector("#main-container")
        skyEl.setAttribute("material",{
          src: `./assets/images/${selectedItemId}/${id}.jpeg`, 
          color:"#FFF",
        })
      }
    },
    handleMouseEnterEvents: function() {
      // Mouse Center Events
      this.el.addEventListener("mouseenter", () => {
        const placeContainer = document.querySelector("#item-container");
        const { state } = placeContainer.getAttribute("tour");
        if (state === "places-list") {
          this.handlePlacesListState();
        }
      });
    },
    handlePlacesListState: function() {
      const id = this.el.getAttribute("id");
      const placesId = ["surrounding"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#item-container");
        placeContainer.setAttribute("cursor-event", {
          selectedItemId: id
        });
        this.el.setAttribute("material", {
          color:"#D76B30",
          opacity: 1
        });
      }
    },
    handleMouseLeaveEvents: function() {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const placesContainer = document.querySelector("#item-container");
        const { state } = placesContainer.getAttribute("tour");
        if (state === "places-list") {
          const { selectedItemId } = this.data;
          if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
              el.setAttribute("material", {
                color: "#0077CC",
                opacity: 1
              });
            }
          }
        }
      });
    },
    
  });
  