AFRAME.registerComponent("cursor-listener", {
    schema:{
        selectedItemId: {default:"",type:"string"},
    },
    init: function () {
      this.placesContainer = this.el;
      this.handleMouseLeaveEvent()
      this.handleMouseEnterEvents()
    },

    handleCmoicsList: function () {
        const id = this.el.getAttribute("id");
        const placesId = ["SpiderMan", "AquaMan", "Thor", "Superman"];
        if (placesId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          placeContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#D76B30",
            opacity: 1,
          });
        }
      },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",() => {
          const id = this.el.getAttribute("id")
          const postersId = [
            "SuperMan",
            "SpiderMan",
            "Thor",
            "AquaMan",
          ]
          if(postersId/includes(id)){
            const postersContainer = document.querySelector("#posters-container")
            postersContainer.setAttribute("curson-listener",{
              selectedItemId:id
            })
            this.el.setAttribute("material",{color:"#1565c0"})
          }
          
        })
      },
      handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")
                if (id==selectedItemId){
                    el.setAttribute("material",{
                        color:"#0077CC",
                        opacity:1
                    })
                }
            }
        })
      }
    })