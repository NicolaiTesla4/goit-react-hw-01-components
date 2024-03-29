import Profile from  './profile/Profile.jsx';
import Statistics from './statistics/Statistics.jsx';
import FriendList from './friendlist/FriendList.jsx';
import Transactions from './transactions/Transactions.jsx';
import userData from './profile/user.json';
import statisticsData from './statistics/data.json';
import friends from './friendlist/friends.json';
import transactionsData from './transactions/block.json';
 
export const App = () => {
  return (
    <div
      style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 60,
        gap: 20,
        fontSize: 40, 
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
      <Statistics data={statisticsData} /> 

       <FriendList friends={friends} />

      <Transactions transactions={transactionsData} />
 
    </div>
  );
};
