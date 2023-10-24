import React from 'react'
import CommonButton from '../CommanBtn/CommonButton';
import { useHistory } from 'react-router-dom';
import './InterviewHome.css';

function InterviewHome() {
    let router = useHistory();
  return (
    <div className="button-container">
     <CommonButton label="Dsa Table" onClick={() => router.push('/dsaTable')} />
     <CommonButton label="React Practics" onClick={() => router.push('/reactInterview')} />
     <CommonButton label="Class Component" onClick={() => router.push('/classComponent')} />
     <CommonButton label="Authentication" onClick={() => router.push('/authentication')} />
     </div>
  )
}

export default InterviewHome