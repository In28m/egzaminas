import React, { useState, useEffect } from 'react';

const GetStart = () => {
  const [selectedCategory, setSelectedCategory] = useState('Travel');
  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(8500);
  const [sliderValue, setSliderValue] = useState(2500);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= minPrice && newValue <= maxPrice) {
      setSliderValue(newValue);
    }
  };

  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    console.log('Min Price:', minPrice);
    console.log('Max Price:', maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    console.log('Slider Value:', sliderValue);
  }, [sliderValue]);

  return (
    <div className="main">
      <h1>✧*｡٩(ˊᗜˋ*)و✧*｡</h1>
      <div className="item-container">
        <span className="item-label">Your Travel</span>
          <select className='category' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="location">location:</option>
            <option value="Dubai">Dubai</option>
            <option value="Maldives">Maldives</option>
            <option value="Bali">Bali</option>
            <option value="Thailand">Thailand</option>
            <option value="Fiji">Fiji</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Kenya">Kenya</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Norway">Norway</option>
            <option value="Mexico">Mexico</option>
            <option value="Germany">Germany</option> 
          </select>

        <div className="slider-container">
          <div className="price-slider">
            <span className='price'>Price: ${sliderValue}</span>
              <input
                type="range"
                className="price-range"
                min={minPrice}
                max={maxPrice}
                value={sliderValue}
                step="1"
                onChange={handleSliderChange}
              />  
          </div>
        </div>
      </div>    
    </div>
  )
}

export default GetStart





