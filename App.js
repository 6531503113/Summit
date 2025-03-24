import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import React from 'react';
import Home from './home';
import AddAnnouncement from './AddAnnouncement';
import Addjob from './addjob';
import EditJobs from './EditJobs';
import PersonnelInformation from './personnelinformation';
import CheckList from './checklist';
import Jobs from './jobs';
import ListJobs from './ListJobs';
import ExaminationResults from './examinationresults';
import AddPersonnel from './addpersonnel';
import Morepersonnal from './morepersonnal';
import MoreAnnouncement from './MoreAnnouncement';
import SubmitExam from './SubmitExam';
import EditJob from './EditJob';
import MoreJobs from './MoreJobs'; // เพิ่ม import หน้า MoreJobs

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddAnnouncement/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addAnnouncement' element={<AddAnnouncement />} />
        <Route path='/addjob' element={<Addjob />} />
        <Route path='/personnelinformation' element={<PersonnelInformation />} />
        <Route path='/checklist' element={<CheckList />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/listjobs' element={<ListJobs />} />
        <Route path='/examinationresults' element={<ExaminationResults />} />
        <Route path='/editjobs/:personId' element={<EditJobs />} />
        <Route path='/editjob/:jobId' element={<EditJob />} />
        <Route path='/addpersonnel' element={<AddPersonnel />} />
        <Route path='/morepersonnal' element={<Morepersonnal />} />
        <Route path='/home' element={<Home />} />
        <Route path='/moreannouncement/:jobId' element={<MoreAnnouncement />} />
        <Route path='/submitexam' element={<SubmitExam />} />
        <Route path='/morejobs/:applicantId' element={<MoreJobs />} /> {/* เพิ่มเส้นทางสำหรับ MoreJobs */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;