import style from "./AppCard.module.css";

const AppCard = ({title, image, content, tags, published}) => {
  if(!published) {
    return null;
  }
    const imagePath = `/images/${image}`


  return (
    
      <div className={style.card}>
      <div className="cardTop">
        <img src={imagePath} alt="" />
      </div>
      <div className={style.cardBottom}>
        <h4 className={style.title}>{title}</h4>
        <p>
          {content}
        </p>
        <button className={style.btn}>LEGGI DI PIU</button>
      </div>
      </div>
    
  );
};

export default AppCard;
