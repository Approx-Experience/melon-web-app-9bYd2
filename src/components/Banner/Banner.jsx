import './Banner.css';

const Banner = ({collectionName, title, subtitle, img, btnText}) => {
  return (
    <div data-testId="banner" className="banner-container">
      <div className="banner-content-area">
        <h5>{collectionName}</h5>
        <h1>{title.toUpperCase()}</h1>
        <p>{subtitle}</p>
        <button id="banner-btn">{btnText.toUpperCase()}</button>
      </div>
      <img className='banner-image' src={img.url} alt={img.alt} />
    </div>
  );
}

export default Banner;
