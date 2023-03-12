import Tab from './Tab';
import './Tabs.css';

const Tabs: React.FC = () => {
  const statesOfButtons = ['default', 'hover', 'disabled'];
  return (
    <div className="Tabs">
      <h2>TABS</h2>
      {statesOfButtons.map((el) => (
        <div className="tab-container" key={el}>
          <div className="tab-subcontainer">
            <Tab stateOfButton={el} />
            <p>{el.toUpperCase()}</p>
          </div>
          <div className="tab-separator"></div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
