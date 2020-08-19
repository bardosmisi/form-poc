import { LitElement, html, query, queryAll, queryAssignedNodes } from 'lit-element';

class WebcomponentFrom extends LitElement {

  @queryAssignedNodes('', true)
  slotNodes;

  @query('form')
  form;

  @queryAll('*')
  allElement;

  customSerialize() {
    let ret = {};
    this.slotNodes.forEach(element => {
      if (element.tagName.toLowerCase() === 'fluid-checkbox') {
        ret[element.getAttribute('name')] = element.checked;
      } else if (element.tagName.toLowerCase() === 'input') {
        ret[element.getAttribute('name')] = element.value;
      }
    });
    return ret;
  }

  _submit(e) {
    e.preventDefault();
    const simpleFormData = new FormData(this.form);
    const customSerializedFromData = this.customSerialize();
    alert(`simple FormData: ${JSON.stringify(simpleFormData)};
customFromData: ${JSON.stringify(customSerializedFromData)}`);
  }

  firstUpdated(props: Map<string | number | symbol, unknown>): void {
    super.firstUpdated(props);

    const slot = this.shadowRoot.querySelector('slot');
    console.log(slot.assignedNodes());
  }

  render() {
    return html`
      <form @submit="${this._submit}">
        <p>Inside the form</p>
        <slot></slot>
        <button type="submit">Submit button</button>
        <p>Inside the form</p>
      </form>
    `;
  }
}

customElements.define('webcomponent-form', WebcomponentFrom);
