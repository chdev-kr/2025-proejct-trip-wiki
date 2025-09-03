export default function Header() {
  this.$target = document.createElement("header");
  this.$target.className = "header";

  this.template = () => {};

  this.render = () => {};
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
