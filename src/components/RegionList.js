export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState;
  this.$target = document.createElement("nav");
  this.$target.className = "region-list";

  this.handleRegion = handleRegion;
  $app.appendChild(this.$target);

  this.template = () => {
    const regions = [
      { id: "All", name: "전체" },
      { id: "Asia", name: "아시아" },
      { id: "Europe", name: "유럽" },
      { id: "North America", name: "북미" },
      { id: "South America", name: "남미" },
      { id: "Africa", name: "아프리카" },
      { id: "Oceania", name: "오세아니아" },
    ];

    return `
      <div class="region-container">
        ${regions
          .map(
            (region) => `
          <button 
            class="region-btn ${this.state === region.id ? "active" : ""}" 
            data-region="${region.id}"
          >
            ${region.name}
          </button>
        `
          )
          .join("")}
      </div>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    this.$target.querySelectorAll(".region-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const region = e.target.dataset.region;
        this.handleRegion(region);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
