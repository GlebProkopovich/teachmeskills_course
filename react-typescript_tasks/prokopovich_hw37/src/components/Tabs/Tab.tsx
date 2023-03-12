import React, { useState } from 'react';
import './Tabs.css';

interface IStateOfButton {
  stateOfButton: string;
}

const Tab: React.FC<IStateOfButton> = ({ stateOfButton }) => {
  const [isDisabled, setIsDisabled] = useState({
    isDisabledAll: false,
    isDisabledMyFavorites: false,
    isDisabledPopular: false,
  });

  return (
    <div className="Tab">
      <button
        disabled={isDisabled.isDisabledAll}
        className={`${stateOfButton === 'hover' ? 'hover' : 'default'} ${
          isDisabled.isDisabledAll === true ? 'disabled' : 'default'
        }`}
        onClick={
          stateOfButton === 'disabled'
            ? () => setIsDisabled({ ...isDisabled, isDisabledAll: true })
            : undefined
        }
      >
        All
      </button>
      <button
        disabled={isDisabled.isDisabledMyFavorites}
        className={`${stateOfButton === 'hover' ? 'hover' : 'default'} ${
          isDisabled.isDisabledMyFavorites === true ? 'disabled' : 'default'
        }`}
        onClick={
          stateOfButton === 'disabled'
            ? () =>
                setIsDisabled({ ...isDisabled, isDisabledMyFavorites: true })
            : undefined
        }
      >
        My favorites
      </button>
      <button
        disabled={isDisabled.isDisabledPopular}
        className={`${stateOfButton === 'hover' ? 'hover' : 'default'} ${
          isDisabled.isDisabledPopular === true ? 'disabled' : 'default'
        }`}
        onClick={
          stateOfButton === 'disabled'
            ? () => setIsDisabled({ ...isDisabled, isDisabledPopular: true })
            : undefined
        }
      >
        Popular
      </button>
    </div>
  );
};

export default Tab;
