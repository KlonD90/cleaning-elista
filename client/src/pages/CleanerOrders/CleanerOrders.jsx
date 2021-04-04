
import {Table} from 'antd';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Title} from '../../components/Title';
import "../CleanerOrders/CleanerOrders.css"

export default () => {
{/*
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

      <Table dataSource={dataSource} columns={columns} />;
*/}
    return <div>
        <Title>Задания для клинеров:</Title>
    
      <table border="1" width="100%" cellpadding="5">
   <tr>
    <th>Адрес</th>
    <th>Время</th>
    <th>ФИО клиента</th>
   </tr>
   <tr>
    <td>Элиста, ул.Ленина 250</td>
    <td>14:00</td>
    <td>Манджиев Манжа Манджиевич</td>
  </tr>
 </table>
    
{/*
    <Router>
            <Switch>
                <Route path="/cleanerorderpages" exact={true}>
                    <CleanerOrderPages />
                </Route>
               
            </Switch>
        </Router>
*/}
  </div>
}



