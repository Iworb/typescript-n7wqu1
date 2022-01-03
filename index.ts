// Import stylesheets
import './style.css';
import { dialog } from './dialog';

(() => {
  function activate(): void {
    const table = getTable();
    const tbody = table.querySelector('tbody');
    tbody.appendChild(createButton());
  }

  function checkScreen(): boolean {
    const sp = new URL(document.location.href).searchParams;
    return sp.get('screen') === 'place' && sp.get('try') === 'confirm';
  }

  function createButton(): Element {
    const cell = document.createElement('td');
    cell.setAttribute('colSpan', '2');
    const href = document.createElement('a');
    href.href = '#';
    href.style.cssText = 'font-size: small; margin-left: 10px;';
    href.innerHTML = '» Прицельная отправка';
    href.onclick = () => window.Dialog.show('sight-ex', dialog);
    cell.appendChild(href);
    return cell;
  }

  function getTable(): HTMLElement {
    return document.querySelector('table.vis');
  }

  function main() {
    if (!checkScreen()) {
      console.log('bad location');
      return;
    }
  }
})();
