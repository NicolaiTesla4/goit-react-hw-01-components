import Profile from  './profile/Profile.jsx';
import userData from './profile/user.json';
import Statistics from './statistics/Statistics.jsx';
import statisticsData from './statistics/data.json';

export const App = () => {
  return (
    <div
      style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        /*  fontSize: 40,  
        color: '#010101'  */
      }}
    >
       <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload Stats" data={statisticsData} />
    
    </div>
  );
};
