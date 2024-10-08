// libraries
import { FC, memo } from "react";

// internationalization
import { useTranslation } from "react-i18next";

// styles
import styles from "./form-button.module.css";

// content

type Props = Readonly<{ disabled: boolean }>;

const FormButton: FC<Props> = ({ disabled }) => {
  
  const { t: translate } = useTranslation();
  
  return (
    <button
      type="submit"
      name="submit"
      disabled={disabled}
      className={disabled ? `${styles.button} ${styles.disabled}` : styles.button}
    >
      {translate("controls.button.text")}
    </button>  
  );
};

export default memo(FormButton);
