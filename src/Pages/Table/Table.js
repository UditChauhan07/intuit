import React from 'react';
import TableInner from '../../Component/TableInner/TableInner';

import { useNavigate } from "react-router-dom";
import AppHeader from '../../Component/AppHeader/AppHeader';
import AppSideBar from '../../Component/AppSiderbar/AppSideBar';
const Table = () => {
  const navigate = useNavigate();
  const table = () => {
    navigate('/table')
  }
  return (
    <div>
      <div>

        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
          <AppHeader></AppHeader>
          <div class="app-main">
            <AppSideBar></AppSideBar>

            <div class="app-main__outer">


              <TableInner></TableInner>

            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Table;





// import React, { useEffect, useState, useMemo } from 'react';
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
// } from 'reactstrap';
// import TableContainer from '../../Component/TableInner/TableContainer';
// import { SelectColumnFilter } from '../../Component/TableInner/filters';
// import AppSideBar from '../../Component/AppSiderbar/AppSideBar';
// import AppHeader from '../../Component/AppHeader/AppHeader';

// const Table = () => {
//   const navigate = useNavigate();
//   const table = () => {
//     navigate('/table')
//   }
//   const Dashboard = () => {
//     navigate('/Dashboard')
//   }
//   const Compression = () => {
//     navigate('/compression')
//   }

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const doFetch = async () => {
//       const response = await fetch('https://randomuser.me/api/?results=100');
//       const body = await response.json();
//       const contacts = body.results;
//       console.log(contacts);
//       setData(contacts);
//     };
//     doFetch();
//   }, []);

//   const renderRowSubComponent = (row) => {
//     const {
//       name: { first, last },
//       location: { city, street, postcode },
//       picture,
//       cell,
//     } = row.original;
//     return (
//       <Card style={{ width: '18rem', margin: '0 auto' }}>
//         <CardImg top src={picture.large} alt='Card image cap' />
//         <CardBody>
//           <CardTitle>
//             <strong>{`${first} ${last}`} </strong>
//           </CardTitle>
//           <CardText>
//             <strong>Phone</strong>: {cell} <br />
//             <strong>Address:</strong>{' '}
//             {`${street.name} ${street.number} - ${postcode} - ${city}`}
//           </CardText>
//         </CardBody>
//       </Card>
//     );
//   };

//   const columns = useMemo(
//     () => [
//       {
//         Header: () => null,
//         id: 'expander',
//         Cell: ({ row }) => (
//           <span {...row.getToggleRowExpandedProps()}>
//             {row.isExpanded ? '👇' : '👉'}
//           </span>
//         ),
//       },
//       {
//         Header: 'Title',
//         accessor: 'name.title',
//         disableSortBy: true,
//         Filter: SelectColumnFilter,
//         filter: 'equals',
//       },
//       {
//         Header: 'First Name',
//         accessor: 'name.first',
//       },
//       {
//         Header: 'Last Name',
//         accessor: 'name.last',
//       },
//       {
//         Header: 'Email',
//         accessor: 'email',
//       },
//       {
//         Header: 'City',
//         accessor: 'location.city',
//       },
//       {
//         Header: 'Hemisphere',
//         accessor: (values) => {
//           const { latitude, longitude } = values.location.coordinates;
//           const first = Number(latitude) > 0 ? 'N' : 'S';
//           const second = Number(longitude) > 0 ? 'E' : 'W';
//           return first + '/' + second;
//         },
//         disableSortBy: true,
//         Filter: SelectColumnFilter,
//         filter: 'equals',
//         Cell: ({ cell }) => {
//           const { value } = cell;

//           const pickEmoji = (value) => {
//             let first = value[0]; // N or S
//             let second = value[2]; // E or W
//             const options = ['⇖', '⇗', '⇙', '⇘'];
//             let num = first === 'N' ? 0 : 2;
//             num = second === 'E' ? num + 1 : num;
//             return options[num];
//           };

//           return (
//             <div style={{ textAlign: 'center', fontSize: 18 }}>
//               {pickEmoji(value)}
//             </div>
//           );
//         },
//       },
//     ],
//     []
//   );

//   return (


//     <div>
//       <div>

//         <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

//           <AppHeader></AppHeader>
//           <div class="app-main">
//             <AppSideBar></AppSideBar>

//             <div class="app-main__outer">

//               <Container style={{ marginTop: 100 }}>
//                 <TableContainer class="table-responsive"
//                   columns={columns}
//                   data={data}
//                   renderRowSubComponent={renderRowSubComponent}
//                 />
//               </Container>

//             </div>

//           </div>
//         </div>


//       </div>
//     </div>



//   );
// };

// export default Table;