import CourseList from './components/CourseList.tsx'
function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <CourseList></CourseList>
    </>
  )
}

export default App
