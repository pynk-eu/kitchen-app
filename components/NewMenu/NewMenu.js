import styles from "./NewMenu.module.css"

export default function NewMenu() {

  async function handleAddNewMenuItem(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const MenuData = Object.fromEntries(formData);

    const response = await fetch("/api/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(MenuData),
    });

  }

  return (
    <form onClick={handleAddNewMenuItem} className={styles["signup-page--form"]}>

      <input type="text" name="name" placeholder="Name" className={styles["singup-page--input"]} />

      <input type="image" name="image" placeholder="Image" className={styles["singup-page--input"]} />

      <input type="number" name="number" placeholder="Price" className={styles["singup-page--input"]} />
      {/* 
      <input type="text" name="address" placeholder="Address" className={styles["singup-page--input"]} /> */}
      <button>Send</button>
    </form>
  )
}