
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action className={styles.form}>
          <input type="hidden" name="id" value="12564c1544c15" />
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone14" />
          <label>Price</label>
          <input type="number" name="price" placeholder="990" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="72" />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder="size"
          />
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder=""
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
