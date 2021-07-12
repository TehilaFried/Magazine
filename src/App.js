import logo from './logo.svg';

//to bring the store
import { Provider } from 'react-redux'
import store from './redux/store'
import helloWold from './redux/service'
import ShowGrade from './redux/component/showGrade';
import ShowPupils from './redux/component/showPupils';
import AddPupil from './redux/component/addPupil';
import UpdatePupil from './redux/component/updatePupil';
import Flash from './redux/flash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from '././redux/menu'
function App() {
  helloWold()
  return (
  // <div className="App">

  //   {/* to bring the 'store', we use the 'Provide' */}
  //   <Provider store={store}>
  //     <Router>
  //       <Flash></Flash>
  //       <Menu></Menu>
  //       <Switch>
  //         <Route path='/ShowGrade'>
  //           <ShowGrade />
  //         </Route>
  //         <Route path='/AddPupil'>
  //           <AddPupil />
  //         </Route>
  //         <Route path='/UpdatePupil'>
  //           <UpdatePupil />
  //         </Route>
  //         {/* <Route path='/pupils/:id'> */}
  //         <Route path='/pupils'>

  //           <ShowPupils />
  //         </Route>
  //       </Switch>

  //     </Router>

  //     {/* the pages of the app that uses the 'store' */}

  //     {/* <ShowGrade />
  //     <ShowPupils />
  //     <AddPupil />
  //     <UpdatePupil /> */}

  //   </Provider>

  // </div>
  // alert(helloWold())
  <>
</>  );
}

export default App;
