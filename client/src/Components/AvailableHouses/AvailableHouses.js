import React from 'react';
import HouseCard from '../HouseCard/HouseCard.js';
import './AvailableHouses.css';

function AvailableHouses({houses, setSelectedState, selectedState}) {
    // const [selectedState, setSelectedState] = useState('All')
    
    // const filterHouses = () => {
    //     if(selectedState === "All"){
    //         return houses
    //     } else {
    //         return houses.filter(h => h.location.toLowerCase().includes(selectedState.toLowerCase()))
    //     }
    // }

    // const test = filterHouses()

    const renderHouses = houses.map(house => <HouseCard house={house} key={house.id} />)
    
    return (
        <div>
            <div className='houses-header-div'>
                <h1>AVAILABLE HOUSES</h1>
            </div>
            <div className='selector-div'>
                <label>
                Select place:
                <select name='state' onChange={(e) =>{ setSelectedState(e.target.value) }} value={selectedState} >
                <option value='All'>All</option>
                    <option value='samburu'>samburu</option>
                    <option value='Nakuru'>Nakuru</option>
                    <option value='kawangware'>kawangware</option>
                    <option value='Florida'>Florida</option>
                    <option value='masai mara'>masai mara</option>
                    <option value='Greece'>Greece</option>
                    <option value='New York'>New York</option>
                    <option value='Bali'>Bali</option>
                    <option value='Utah'>Utah</option>
                    <option value='Watamu'>Watamu</option>
                </select>
                </label>
            </div>
            <div className='available-houses'>
                {renderHouses}
            </div>
        </div>
    )
}

export default AvailableHouses;