import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import './AdminSubjects.css';

const AdminSubjects = () => {
  const classesOptions = ['الرابعة اساسي', 'الخامسة', 'السادسة'];
  const [selectedClass, setSelectedClass] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({ name: '', image: null });
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [newPeriod, setNewPeriod] = useState({ name: '', image: null });
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(null);
  const [newLesson, setNewLesson] = useState({ name: '', video: null, ppt: null, image: null });

  const handleAddSubject = () => {
    if (selectedClass) {
      setSubjects([...subjects, { className: selectedClass, ...newSubject, periods: [] }]);
      setNewSubject({ name: '', image: null });
    }
  };

  const handleDeleteSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
    setSelectedSubjectIndex(null);
    setSelectedPeriodIndex(null);
  };

  const handleEditSubject = (index, updatedSubject) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index] = updatedSubject;
    setSubjects(updatedSubjects);
  };

  const handleAddPeriod = () => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods.push({ ...newPeriod, lessons: [] });
    setSubjects(updatedSubjects);
    setNewPeriod({ name: '', image: null });
  };

  const handleDeletePeriod = (periodIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods.splice(periodIndex, 1);
    setSubjects(updatedSubjects);
    setSelectedPeriodIndex(null);
  };

  const handleEditPeriod = (periodIndex, updatedPeriod) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[periodIndex] = updatedPeriod;
    setSubjects(updatedSubjects);
  };

  const handleAddLesson = () => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons.push(newLesson);
    setSubjects(updatedSubjects);
    setNewLesson({ name: '', video: null, ppt: null, image: null });
  };

  const handleDeleteLesson = (lessonIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons.splice(lessonIndex, 1);
    setSubjects(updatedSubjects);
  };

  const handleEditLesson = (lessonIndex, updatedLesson) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons[lessonIndex] = updatedLesson;
    setSubjects(updatedSubjects);
  };

  const customBase64Uploader = async (event, setStateFunction) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
      setStateFunction((prevState) => ({
        ...prevState,
        [event.inputName]: base64data,
      }));
    };
  };

  return (
    <div className="admin-subjects-container">
      <div className="admin-subjects-content">
        <h1>إدارة المواد والفترات والدروس</h1>

        {/* Class Selection */}
        <div className="section">
          <h2>إدارة الفصول</h2>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="" disabled>اختر الفصل</option>
            {classesOptions.map((cls, index) => (
              <option key={index} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        {/* Subject Management */}
        {selectedClass && (
          <div className="section">
            <h2>إدارة المواد</h2>
            <input
              type="text"
              placeholder="اسم المادة"
              value={newSubject.name}
              onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
            />
            <label>أضف صورة للمادة</label>
            <FileUpload mode="basic" name="image" accept="image/*" customUpload uploadHandler={(e) => customBase64Uploader(e, setNewSubject)} />
            <button onClick={handleAddSubject}>إضافة المادة</button>
            <div className="subjects-list">
              {subjects
                .filter(subject => subject.className === selectedClass)
                .map((subject, index) => (
                  <div key={index} className="subject-item">
                    <input
                      type="text"
                      value={subject.name}
                      onChange={(e) => handleEditSubject(index, { ...subject, name: e.target.value })}
                    />
                    <FileUpload mode="basic" name="image" accept="image/*" customUpload uploadHandler={(e) => customBase64Uploader(e, (updated) => handleEditSubject(index, { ...subject, ...updated }))} />
                    <button onClick={() => handleDeleteSubject(index)}>حذف</button>
                    <button onClick={() => setSelectedSubjectIndex(index)}>اختر</button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Period Management */}
        {selectedSubjectIndex !== null && (
          <div className="section">
            <h2>إدارة الفترات لمادة {subjects[selectedSubjectIndex].name}</h2>
            <input
              type="text"
              placeholder="اسم الفترة"
              value={newPeriod.name}
              onChange={(e) => setNewPeriod({ ...newPeriod, name: e.target.value })}
            />
            <label>أضف صورة للفترة</label>
            <FileUpload mode="basic" name="image" accept="image/*" customUpload uploadHandler={(e) => customBase64Uploader(e, setNewPeriod)} />
            <button onClick={handleAddPeriod}>إضافة الفترة</button>
            <div className="periods-list">
              {subjects[selectedSubjectIndex].periods.map((period, index) => (
                <div key={index} className="period-item">
                  <input
                    type="text"
                    value={period.name}
                    onChange={(e) => handleEditPeriod(index, { ...period, name: e.target.value })}
                  />
                  <FileUpload mode="basic" name="image" accept="image/*" customUpload uploadHandler={(e) => customBase64Uploader(e, (updated) => handleEditPeriod(index, { ...period, ...updated }))} />
                  <button onClick={() => handleDeletePeriod(index)}>حذف</button>
                  <button onClick={() => setSelectedPeriodIndex(index)}>اختر</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lesson Management */}
        {selectedPeriodIndex !== null && (
          <div className="section">
            <h2>إدارة الدروس لفترة {subjects[selectedSubjectIndex].periods[selectedPeriodIndex].name} في مادة {subjects[selectedSubjectIndex].name}</h2>
            <input
              type="text"
              placeholder="اسم الدرس"
              value={newLesson.name}
              onChange={(e) => setNewLesson({ ...newLesson, name: e.target.value })}
            />
            <label>أضف فيديو للدرس</label>
            <FileUpload mode="basic" name="video" accept="video/*" customUpload uploadHandler={(e) => customBase64Uploader(e, setNewLesson)} />
            <label>أضف PowerPoint للدرس</label>
            <FileUpload mode="basic" name="ppt" accept=".ppt,.pptx" customUpload uploadHandler={(e) => customBase64Uploader(e, setNewLesson)} />
            <label>أضف صورة للدرس</label>
            <FileUpload mode="basic" name="image" accept="image/*" customUpload uploadHandler={(e) => customBase64Uploader(e, setNewLesson)} />
            <button onClick={handleAddLesson}>إضافة الدرس</button>
            <div className="lessons-list">
              {subjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons.map((lesson, index) => (
                <div key={index} className="lesson-item">
                  <input
                    type="text"
                    value={lesson.name}
                    onChange={(e) => handleEditLesson(index, { ...lesson, name: e.target.value })}
                  />
                  <FileUpload mode="basic" name="video" accept="video/*" customUpload uploadHandler={(e) => customBase64Uploader(e, (updated) => handleEditLesson(index, { ...lesson, ...updated }))} />
                  <FileUpload mode="basic" name="ppt" accept=".ppt,.pptx" customUpload uploadHandler={(e) => customBase64Uploader(e, (updated) => handleEditLesson(index, { ...lesson, ...updated }))} />
                  <FileUpload mode="basic" name="image" accept="image/*" customUpload uploadHandler={(e) => customBase64Uploader(e, (updated) => handleEditLesson(index, { ...lesson, ...updated }))} />
                  <button onClick={() => handleDeleteLesson(index)}>حذف</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSubjects;
