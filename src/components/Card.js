function Card({ imageUrl, title, price }) {
  return (
    <div className='card'>
      <figure>
        <img alt='card-img' src={imageUrl}></img>
      </figure>
      <div className='card__body'>
        <h2 className='card__title'>{title}</h2>
        <p className='card__desc'></p>
      </div>
      <div className='card__bottom'>
        <p className='card__price'>{price}&#8381;</p>
        <button className='card__btn'>Добавить</button>
      </div>
    </div>
  );
}

export default Card;
