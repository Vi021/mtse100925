# mycart-lib 🛒

A lightweight React library for building a shopping cart with reusable UI components (Button, InputText, Card, Modal) and cart logic (add, update, remove items).  

Perfect for quickly integrating a simple shopping cart into your React projects.

---

## 🚀 Installation

```bash
npm install mycart-lib
```

# Components

- **Button**: styled button (primary, secondary, danger)

- **InputText**: simple input with label support

- **Card**: container with shadow and padding

- **Modal**: popup modal with open, onClose, title


# Cart API (via useCart hook)

- **cart**: array of cart items ({id, name, price, quantity})

- **addItem(item)**: add a new item

- **removeItem(id)**: remove by id

- **updateItem(id, { quantity })**: update item fields

- **clearCart()**: clear the cart

- **totalItems**: total number of items

- **totalPrice**: total cart value
