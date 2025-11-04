/* 
  script.js
  - Part 1: Variable declarations & conditionals
  - Part 2: Custom functions
  - Part 3: Loop examples
  - Part 4: DOM interactions (>=3)
  Each section clearly commented and organized.
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     Helper: ensure basic UI exists (creates minimal elements if missing)
     This keeps the script resilient when used with different HTML.
     ============================================================ */
  function ensureElement(selector, tag = 'div', attrs = {}) {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement(tag);
      if (selector.startsWith('#')) el.id = selector.slice(1);
      if (selector.startsWith('.')) el.className = selector.slice(1);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.body.appendChild(el);
    }
    return el;
  }

  // Ensure UI nodes
  const controls = ensureElement('#controls', 'div');
  const resultArea = ensureElement('#results', 'section');
  const itemList = ensureElement('#itemList', 'ul');
  const themeToggleBtn = ensureElement('#themeToggle', 'button');
  themeToggleBtn.textContent = 'Toggle theme';

  /* ==========================
     Part 1: Variables & Conditionals
     - Declare variables and use conditional logic
     ========================== */
  const MAX_ITEMS = 8;        // maximum items allowed
  let cartCount = 0;          // current number of items
  let discountActive = false; // toggle for discounts

  // Conditional example: check cart capacity
  function canAddItem() {
    if (cartCount < MAX_ITEMS) {
      return true;
    } else if (cartCount === MAX_ITEMS) {
      // borderline: allow but show warning
      console.warn('Cart reached maximum recommended size.');
      return false;
    } else {
      // over capacity
      return false;
    }
  }

  /* ==========================
     Part 2: Custom Functions (at least 2)
     - formatDate: returns readable date string
     - factorial: recursive function used to compute a tiny "fun" discount
     ========================== */
  function formatDate(d = new Date()) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function factorial(n) {
    // small, safe recursive factorial for n >= 0
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  // compute a tiny discount percent derived from factorial of count (kept reasonable)
  function factorialDiscountPercent(count) {
    // keep discount between 0 and 9
    return factorial(Math.min(count, 6)) % 10;
  }

  /* ==========================
     Part 3: Loop examples (at least 2)
     - for loop: generate initial demo items
     - while loop: simulate countdown display
     ========================== */

  // for loop: populate demo item list
  const initialItems = ['Notebook', 'Pen', 'Mug', 'Sticker'];
  for (let i = 0; i < initialItems.length; i++) {
    const li = document.createElement('li');
    li.textContent = `${initialItems[i]} (added ${formatDate()})`;
    itemList.appendChild(li);
    cartCount++;
  }

  // while loop: a short countdown written to the results area
  (function countdownDemo() {
    let n = 3;
    const p = document.createElement('p');
    p.textContent = 'Countdown: ';
    resultArea.appendChild(p);
    const interval = setInterval(() => {
      p.textContent = `Countdown: ${n}`;
      n--;
      if (n < 0) {
        clearInterval(interval);
        const done = document.createElement('small');
        done.textContent = ` Ready (${formatDate()})`;
        p.appendChild(done);
      }
    }, 400);
  })();

  /* ==========================
     Part 4: DOM interactions (>=3)
     - addItem button click
     - theme toggle
     - form-like validation via inputs created here
     - update results and table
     ========================== */

  // Create simple controls for adding items
  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add random item';
  addBtn.id = 'addItemBtn';
  controls.appendChild(addBtn);

  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear items';
  clearBtn.id = 'clearItemsBtn';
  clearBtn.style.marginLeft = '8px';
  controls.appendChild(clearBtn);

  // Simple status display
  const status = document.createElement('div');
  status.id = 'status';
  status.style.marginTop = '8px';
  status.textContent = `Items in cart: ${cartCount}`;
  controls.appendChild(status);

  // Event: add item
  addBtn.addEventListener('click', () => {
    // DOM interaction: create element, update textContent, appendChild
    if (!canAddItem()) {
      status.textContent = 'Cannot add item: capacity reached.';
      status.classList.add('error');
      return;
    }
    const names = ['Bottle', 'Cap', 'Sticker', 'Poster', 'Keychain', 'Case'];
    const name = names[Math.floor(Math.random() * names.length)];
    const li = document.createElement('li');                  // createElement
    li.textContent = `${name} — ${formatDate()}`;
    itemList.appendChild(li);                                // appendChild
    cartCount++;
    status.textContent = `Items in cart: ${cartCount}`;      // textContent update
    status.classList.remove('error');

    // compute & display factorial-based discount (DOM: setAttribute & create)
    const discount = factorialDiscountPercent(cartCount);
    li.setAttribute('data-discount', String(discount));      // setAttribute
    const badge = document.createElement('span');
    badge.textContent = ` • discount ${discount}%`;
    badge.style.fontSize = '0.9em';
    badge.style.color = '#0b6';
    li.appendChild(badge);                                   // appendChild
  });

  // Event: clear items
  clearBtn.addEventListener('click', () => {
    // DOM interaction: remove children via loop
    while (itemList.firstChild) itemList.removeChild(itemList.firstChild);
    cartCount = 0;
    status.textContent = 'Items in cart: 0';
    status.classList.remove('error');
  });

  // Theme toggle (DOM interaction: classList.toggle)
  themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    // reflect current state
    const active = document.documentElement.classList.contains('dark-theme');
    themeToggleBtn.textContent = active ? 'Light theme' : 'Dark theme';
  });

  // More DOM interaction: create a small results table and update it on demand
  const table = document.createElement('table');
  table.style.marginTop = '12px';
  table.innerHTML = '<thead><tr><th>Time</th><th>Items</th><th>Discount%</th></tr></thead><tbody></tbody>';
  resultArea.appendChild(table);
  const tableBody = table.querySelector('tbody');

  // helper to record a snapshot row
  function recordSnapshot() {
    const tr = document.createElement('tr');
    const timeTd = document.createElement('td');
    timeTd.textContent = formatDate();
    const itemsTd = document.createElement('td');
    itemsTd.textContent = String(cartCount);
    const discountTd = document.createElement('td');
    // compute average discount from list items' data-discount
    const discounts = Array.from(itemList.querySelectorAll('li')).map(li => Number(li.getAttribute('data-discount') || 0));
    const avg = discounts.length ? Math.round(discounts.reduce((a,b)=>a+b,0)/discounts.length) : 0;
    discountTd.textContent = `${avg}%`;
    tr.appendChild(timeTd);
    tr.appendChild(itemsTd);
    tr.appendChild(discountTd);
    tableBody.prepend(tr);
  }

  // record snapshot button
  const snapBtn = document.createElement('button');
  snapBtn.textContent = 'Record snapshot';
  snapBtn.style.marginLeft = '8px';
  controls.appendChild(snapBtn);
  snapBtn.addEventListener('click', () => {
    recordSnapshot(); // DOM updates table
  });

  /* ==========================
     Accessibility & small enhancements
     - keyboard shortcut to add item: press "a"
     - short live region update (aria-live)
     ========================== */
  const live = document.createElement('div');
  live.setAttribute('aria-live', 'polite');
  live.style.position = 'absolute';
  live.style.left = '-9999px';
  document.body.appendChild(live);

  document.addEventListener('keydown', (ev) => {
    if (ev.key.toLowerCase() === 'a') {
      addBtn.click(); // uses existing handler
      live.textContent = `Added item, count now ${cartCount}`;
    }
  });

  /* ==========================
     End of script - informational log
     ========================== */
  console.info('Interactive demo script initialized.');
});