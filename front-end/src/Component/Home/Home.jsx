import React from 'react';
import CommonButton from '../CommanBtn/CommonButton';
import { useHistory } from 'react-router-dom';
import '../../Component/Home/HomeStyle.css'

function Home() {
  let router = useHistory();

  return (
    <div className="center-container">
      <div style={{marginRight:'1rem'}}>
      <CommonButton label="App" onClick={() => router.push('/home')} /> </div>
      <div style={{marginLeft:'1rem'}}>
      <CommonButton label="Interview" onClick={() => router.push('/interviewSelection')} />
      </div>
    </div>
  );
}

export default Home;
