import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ list, removeItem }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <div className={styles.itemContainer}>
              {item.name}: {item.number}
              <button
                className={styles.deleteBtn}
                onClick={() => removeItem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.defaultProps = {
  list: [],
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func,
};
