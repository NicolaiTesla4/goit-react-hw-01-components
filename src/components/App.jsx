import Profile from  './profile/Profile.jsx';
import userData from './profile/user.json';

export const App = () => {
  return (
    <div
      style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101' 
      }}
    >
       <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    
    </div>
  );
};
