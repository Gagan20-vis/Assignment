import { Outlet } from 'react-router-dom'
export default function App() {
  const style = {
    body:{
      background: 'rgb(40, 40, 40)'
    }
  }
  return (
    <div style={style.body}>
      <Outlet/>
    </div>
  )
}
