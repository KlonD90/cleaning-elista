import {Title} from '../../components/Title';
import "../CleanerOrderPages/CleanerOrderPages.css";


export default () => {
    return <div>
        <Title>Страница для клинера:</Title>
        
        <table border="1" width="100%" cellpadding="5">
   <tr>
    <th>Адрес</th>
    <th>Время</th>
    <th>ФИО клиента</th>
    <th>Статус заказа</th>
    <th>Коментарии к заказу</th>
   </tr>
   
   <tr>
    <td>Элиста, ул.Ленина 250</td>
    <td>14:00</td>
    <td>Манджиев Манжа Манджиевич</td>
    <td><input type="checkbox" name="a" value="Выполнен"/> Выполнен
    </td>
    <td><textarea rows="3" cols="50" name="text"></textarea></td>
    </tr>
    </table>
    </div>
}