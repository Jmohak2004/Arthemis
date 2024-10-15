// import React from 'react';
// import { Calendar, Clock, GraduationCap, List, Star } from "lucide-react";

// const cardStyle = {
//   backgroundColor: 'white',
//   borderRadius: '0.5rem',
//   boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
//   overflow: 'hidden',
// };

// const cardHeaderStyle = {
//   padding: '1rem',
//   borderBottom: '1px solid #e5e7eb',
// };

// const cardTitleStyle = {
//   fontSize: '1.25rem',
//   fontWeight: 'bold',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '0.5rem',
// };

// const cardContentStyle = {
//   padding: '1rem',
// };

// const tableStyle = {
//   width: '100%',
//   borderCollapse: 'collapse',
// };

// const thStyle = {
//   textAlign: 'left',
//   padding: '0.75rem',
//   borderBottom: '1px solid #e5e7eb',
// };

// const tdStyle = {
//   padding: '0.75rem',
//   borderBottom: '1px solid #e5e7eb',
// };

// export default function JEEDashboard() {
//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
//       <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>JEE Student Dashboard</h1>
      
//       <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
//         <div style={cardStyle}>
//           <div style={cardHeaderStyle}>
//             <h2 style={cardTitleStyle}>
//               <List style={{ height: '1.25rem', width: '1.25rem' }} />
//               Course Outline and Syllabus
//             </h2>
//           </div>
//           <div style={cardContentStyle}>
//             <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
//               <li>Physics
//                 <ul style={{ listStyleType: 'circle', paddingLeft: '1.25rem' }}>
//                   <li>Mechanics</li>
//                   <li>Thermodynamics</li>
//                   <li>Electromagnetism</li>
//                 </ul>
//               </li>
//               <li>Chemistry
//                 <ul style={{ listStyleType: 'circle', paddingLeft: '1.25rem' }}>
//                   <li>Organic Chemistry</li>
//                   <li>Inorganic Chemistry</li>
//                   <li>Physical Chemistry</li>
//                 </ul>
//               </li>
//               <li>Mathematics
//                 <ul style={{ listStyleType: 'circle', paddingLeft: '1.25rem' }}>
//                   <li>Algebra</li>
//                   <li>Calculus</li>
//                   <li>Geometry and Trigonometry</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={cardHeaderStyle}>
//             <h2 style={cardTitleStyle}>
//               <Clock style={{ height: '1.25rem', width: '1.25rem' }} />
//               Timetable
//             </h2>
//           </div>
//           <div style={cardContentStyle}>
//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th style={thStyle}>Day</th>
//                   <th style={thStyle}>9 AM - 11 AM</th>
//                   <th style={thStyle}>1 PM - 3 PM</th>
//                   <th style={thStyle}>4 PM - 6 PM</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={tdStyle}>Monday</td>
//                   <td style={tdStyle}>Physics</td>
//                   <td style={tdStyle}>Chemistry</td>
//                   <td style={tdStyle}>Mathematics</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Tuesday</td>
//                   <td style={tdStyle}>Mathematics</td>
//                   <td style={tdStyle}>Physics</td>
//                   <td style={tdStyle}>Chemistry</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Wednesday</td>
//                   <td style={tdStyle}>Chemistry</td>
//                   <td style={tdStyle}>Mathematics</td>
//                   <td style={tdStyle}>Physics</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={cardHeaderStyle}>
//             <h2 style={cardTitleStyle}>
//               <Calendar style={{ height: '1.25rem', width: '1.25rem' }} />
//               Important Dates
//             </h2>
//           </div>
//           <div style={cardContentStyle}>
//             <ul style={{ listStyleType: 'none', padding: 0 }}>
//               <li style={{ marginBottom: '0.5rem' }}>
//                 <span style={{ fontWeight: 'bold' }}>May 15, 2024:</span> JEE Main Application Deadline
//               </li>
//               <li style={{ marginBottom: '0.5rem' }}>
//                 <span style={{ fontWeight: 'bold' }}>June 1-10, 2024:</span> JEE Main Exam (Session 1)
//               </li>
//               <li style={{ marginBottom: '0.5rem' }}>
//                 <span style={{ fontWeight: 'bold' }}>July 15-25, 2024:</span> JEE Main Exam (Session 2)
//               </li>
//               <li style={{ marginBottom: '0.5rem' }}>
//                 <span style={{ fontWeight: 'bold' }}>August 20, 2024:</span> JEE Advanced Registration Deadline
//               </li>
//               <li style={{ marginBottom: '0.5rem' }}>
//                 <span style={{ fontWeight: 'bold' }}>September 5, 2024:</span> JEE Advanced Exam
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div style={cardStyle}>
//           <div style={cardHeaderStyle}>
//             <h2 style={cardTitleStyle}>
//               <GraduationCap style={{ height: '1.25rem', width: '1.25rem' }} />
//               Exam Dates
//             </h2>
//           </div>
//           <div style={cardContentStyle}>
//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th style={thStyle}>Exam</th>
//                   <th style={thStyle}>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={tdStyle}>Physics Mock Test</td>
//                   <td style={tdStyle}>May 20, 2024</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Chemistry Mock Test</td>
//                   <td style={tdStyle}>May 27, 2024</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Mathematics Mock Test</td>
//                   <td style={tdStyle}>June 3, 2024</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Full Length Mock JEE</td>
//                   <td style={tdStyle}>June 15, 2024</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div style={{ ...cardStyle, gridColumn: '1 / -1' }}>
//           <div style={cardHeaderStyle}>
//             <h2 style={cardTitleStyle}>
//               <Star style={{ height: '1.25rem', width: '1.25rem' }} />
//               Test Scores
//             </h2>
//           </div>
//           <div style={cardContentStyle}>
//             <table style={tableStyle}>
//               <thead>
//                 <tr>
//                   <th style={thStyle}>Test Name</th>
//                   <th style={thStyle}>Date</th>
//                   <th style={thStyle}>Physics Score</th>
//                   <th style={thStyle}>Chemistry Score</th>
//                   <th style={thStyle}>Mathematics Score</th>
//                   <th style={thStyle}>Total Score</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={tdStyle}>Mock Test 1</td>
//                   <td style={tdStyle}>April 10, 2024</td>
//                   <td style={tdStyle}>85/120</td>
//                   <td style={tdStyle}>92/120</td>
//                   <td style={tdStyle}>105/120</td>
//                   <td style={tdStyle}>282/360</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Mock Test 2</td>
//                   <td style={tdStyle}>April 25, 2024</td>
//                   <td style={tdStyle}>90/120</td>
//                   <td style={tdStyle}>88/120</td>
//                   <td style={tdStyle}>110/120</td>
//                   <td style={tdStyle}>288/360</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle}>Mock Test 3</td>
//                   <td style={tdStyle}>May 10, 2024</td>
//                   <td style={tdStyle}>95/120</td>
//                   <td style={tdStyle}>98/120</td>
//                   <td style={tdStyle}>112/120</td>
//                   <td style={tdStyle}>305/360</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Calendar, Clock, GraduationCap, List, Star } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const styles = {
  container: {
    maxWidth: '1900px',
    padding: '1rem',
    backgroundColor: '#1a202c',
    color: '#e2e8f0',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#f7fafc',
  },
  grid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    backgroundColor: '#2d3748',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '1rem',
    borderBottom: '1px solid #4a5568',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f7fafc',
  },
  cardContent: {
    padding: '1rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.875rem',
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    borderBottom: '1px solid #4a5568',
    color: '#a0aec0',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #4a5568',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.25rem',
  },
  subList: {
    listStyleType: 'circle',
    paddingLeft: '1.25rem',
  },
  importantDatesList: {
    listStyleType: 'none',
    padding: 0,
  },
  importantDatesItem: {
    marginBottom: '0.5rem',
  },
  importantDatesDate: {
    fontWeight: 'bold',
    color: '#a0aec0',
  },
  icon: {
    height: '1.25rem',
    width: '1.25rem',
    color: '#a0aec0',
  },
  chartContainer: {
    height: '300px',
    width: '100%',
  },
};

const testScoresData = [
  { name: 'Mock Test 1', Physics: 85, Chemistry: 92, Mathematics: 105 },
  { name: 'Mock Test 2', Physics: 90, Chemistry: 88, Mathematics: 110 },
  { name: 'Mock Test 3', Physics: 95, Chemistry: 98, Mathematics: 112 },
];

const subjectPerformanceData = [
  { subject: 'Physics', score: 95 },
  { subject: 'Chemistry', score: 98 },
  { subject: 'Mathematics', score: 112 },
];

export default function JEEDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>JEE Student Dashboard</h1>
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <List style={styles.icon} />
              Course Outline and Syllabus
            </h2>
          </div>
          <div style={styles.cardContent}>
            <ul style={styles.list}>
              <li>Physics
                <ul style={styles.subList}>
                  <li>Mechanics</li>
                  <li>Thermodynamics</li>
                  <li>Electromagnetism</li>
                </ul>
              </li>
              <li>Chemistry
                <ul style={styles.subList}>
                  <li>Organic Chemistry</li>
                  <li>Inorganic Chemistry</li>
                  <li>Physical Chemistry</li>
                </ul>
              </li>
              <li>Mathematics
                <ul style={styles.subList}>
                  <li>Algebra</li>
                  <li>Calculus</li>
                  <li>Geometry and Trigonometry</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Clock style={styles.icon} />
              Timetable
            </h2>
          </div>
          <div style={styles.cardContent}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Day</th>
                  <th style={styles.th}>9 AM - 11 AM</th>
                  <th style={styles.th}>1 PM - 3 PM</th>
                  <th style={styles.th}>4 PM - 6 PM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Monday</td>
                  <td style={styles.td}>Physics</td>
                  <td style={styles.td}>Chemistry</td>
                  <td style={styles.td}>Mathematics</td>
                </tr>
                <tr>
                  <td style={styles.td}>Tuesday</td>
                  <td style={styles.td}>Mathematics</td>
                  <td style={styles.td}>Physics</td>
                  <td style={styles.td}>Chemistry</td>
                </tr>
                <tr>
                  <td style={styles.td}>Wednesday</td>
                  <td style={styles.td}>Chemistry</td>
                  <td style={styles.td}>Mathematics</td>
                  <td style={styles.td}>Physics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Calendar style={styles.icon} />
              Important Dates
            </h2>
          </div>
          <div style={styles.cardContent}>
            <ul style={styles.importantDatesList}>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>May 15, 2024:</span> JEE Main Application Deadline
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>June 1-10, 2024:</span> JEE Main Exam (Session 1)
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>July 15-25, 2024:</span> JEE Main Exam (Session 2)
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>August 20, 2024:</span> JEE Advanced Registration Deadline
              </li>
              <li style={styles.importantDatesItem}>
                <span style={styles.importantDatesDate}>September 5, 2024:</span> JEE Advanced Exam
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <GraduationCap style={styles.icon} />
              Exam Dates
            </h2>
          </div>
          <div style={styles.cardContent}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Exam</th>
                  <th style={styles.th}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Physics Mock Test</td>
                  <td style={styles.td}>May 20, 2024</td>
                </tr>
                <tr>
                  <td style={styles.td}>Chemistry Mock Test</td>
                  <td style={styles.td}>May 27, 2024</td>
                </tr>
                <tr>
                  <td style={styles.td}>Mathematics Mock Test</td>
                  <td style={styles.td}>June 3, 2024</td>
                </tr>
                <tr>
                  <td style={styles.td}>Full Length Mock JEE</td>
                  <td style={styles.td}>June 15, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{...styles.card, gridColumn: '1 / -1'}}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Star style={styles.icon} />
              Test Scores
            </h2>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={testScoresData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="name" stroke="#a0aec0" />
                  <YAxis stroke="#a0aec0" />
                  <Tooltip contentStyle={{backgroundColor: '#2d3748', border: 'none'}} />
                  <Legend />
                  <Line type="monotone" dataKey="Physics" stroke="#48bb78" />
                  <Line type="monotone" dataKey="Chemistry" stroke="#4299e1" />
                  <Line type="monotone" dataKey="Mathematics" stroke="#ed8936" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div style={{...styles.card, gridColumn: '1 / -1'}}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>
              <Star style={styles.icon} />
              Subject Performance
            </h2>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" />
                  <XAxis dataKey="subject" stroke="#a0aec0" />
                  <YAxis stroke="#a0aec0" />
                  <Tooltip contentStyle={{backgroundColor: '#2d3748', border: 'none'}} />
                  <Legend />
                  <Bar dataKey="score" fill="#4299e1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}