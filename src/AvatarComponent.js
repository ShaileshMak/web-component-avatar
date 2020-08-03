import defaultAvatarImage from "./assets/avatar-placeholder.jpeg";

class AvatarComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.innerHTML = `
      <style>
        .avatar-image {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          vertical-align: middle;
          margin: 0 5px;
        }
        .avatar-name {
          font-family: 'Arial'
        }
      </style>
    `;
  }

  connectedCallback() {
    this.setupName();
    this.setupImage();
    this.positionName();
  }

  setupName() {
    this._avatarName = this.getAttribute("avatarName") || "";
    if (this._avatarName) {
      this.nameEl = document.createElement("span");
      this.nameEl.setAttribute("class", "avatar-name");
      this.nameEl.innerHTML = this._avatarName;
    }
  }

  setupImage() {
    this._src = this.getAttribute("src") || defaultAvatarImage;
    this.imageEl = new Image();
    this.imageEl.src = this._src;
    this.imageEl.setAttribute("class", "avatar-image");
    this._avatarName && this.imageEl.setAttribute("alt", this._avatarName);
  }

  positionName() {
    this._textPosition = this.getAttribute("textPosition") || "left";
    if (this._textPosition.toLowerCase() === "right") {
      this.imageEl && this._shadowRoot.appendChild(this.imageEl);
      this.nameEl && this._shadowRoot.appendChild(this.nameEl);
    } else {
      this.nameEl && this._shadowRoot.appendChild(this.nameEl);
      this.imageEl && this._shadowRoot.appendChild(this.imageEl);
    }
  }
}
customElements.define("avatar-comp", AvatarComponent);
