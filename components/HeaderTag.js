import Styles from '../styles/HeaderTag.module.css'

const HeaderTag = (props) => {
  return (
    <div>
      <h1 className={Styles.title}>{props.header}</h1>
      <p className={Styles.description}>{props.headerTag}</p>
    </div>
  );
};

export default HeaderTag;
