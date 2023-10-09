import navigateIcon from '@/assets/navigateIcon.svg';
import hierarchyIcon from '@/assets/hierarchyIcon.svg';
import recieveIcon from '@/assets/recieveIcon.svg';
import flightIcon from '@/assets/flightIcon.svg';

export default function DiscoverFeatures() {
  return (
    <div className="discoverContainer">
      <h2 className="features-text">Discover our Features</h2>
      <div className="features-layout">
        <div className="flex rows">
          <div className="flex-col card-layout">
            <div className="card-layout-container flex">
              <div className=" flex n-icon">
                <img src={navigateIcon} alt="navigate to" />
              </div>
              <h2 className="discover-text">Share Your Travel Plan</h2>
            </div>
            <p className="text-box">
              Ticket is an ultra-convenient way to buy your train or bus ticket
              online in seconds.
            </p>
          </div>

          <div className=" card-layout flex-col">
            <div className="card-layout-container flex">
              <div className=" flex h-icon">
                <img src={hierarchyIcon} alt="hierarchy" />
              </div>
              <h2 className="discover-text">Get Monthly Tour</h2>
            </div>
            <p className="text-box">
              Our Get Monthly Tours marketing package will help get more clients
            </p>
          </div>
        </div>
        <div className="flex rows">
          <div className="card-layout flex-col">
            <div className="card-layout-container flex">
              <div className="flex r-icon">
                <img src={recieveIcon} alt="recieve ticket icon" />
              </div>
              <h2 className="discover-text">Recieve Ticket</h2>
            </div>
            <p className="text-box">
              The recieve plan Ticket will allow you to travel freely. You will
              be able to get in any location.
            </p>
          </div>
          <div className="card-layout flex-col">
            <div className="card-layout-container flex">
              <div className="f-icon flex">
                <img src={flightIcon} alt="flight icon" />
              </div>
              <h2 className="discover-text">Flight Booking</h2>
            </div>
            <p className="text-box">
              Flight Booking is an ultra-convenient way to buy your train or bus
              ticket online in seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
