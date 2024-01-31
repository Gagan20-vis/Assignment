import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllShow from './components/AllShow.jsx';
import ShowDetail from './components/ShowDetail.jsx'
import { store } from './app/store.js';
import { Provider } from 'react-redux';
const router = createBrowserRouter([
  {
    path: "/Assignment",
    element: <App />,
    children: [
      {
        path: '',
        element: <AllShow />
      },
      {
        path: '/Show',
        element: <ShowDetail />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
