export default function RegionList() {
  this.$target = document.createElement("header");
  this.$target.className = "region-list";

  this.template = () => {};

  this.render = () => {};
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
