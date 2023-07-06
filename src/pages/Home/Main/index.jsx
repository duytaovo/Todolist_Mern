import TabMain from '../../../components/TabMain'
import { useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getTasks } from '../../../store/slices/task'
import { unwrapResult } from '@reduxjs/toolkit'
import MovableItem from '../../NotFound/Draggable/MovableItem/MovableItem'

const MainContent = ({ onClick }) => {
  const [tasks, setTasks] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTasks())
      .then(unwrapResult)
      .then((res) => {
        setTasks(res)
      })
  }, [dispatch])

  const [isDeleteOpen, setisDeleteOpen] = useState({
    status: false,
    id: ''
  })
  const [isDetailOpen, setisDetailOpen] = useState(false)

  const dragType = 'Drag type'

  // if (loading) {
  //   return <Spinner />
  // }

  const moveCardHandler = (firstId, secondId) => {
    const prevTasks = [...tasks]
    const dragTask = prevTasks.find((task) => task._id === firstId)
    const hoverTask = prevTasks.find((task) => task._id === secondId)

    const dragArrayIndex = prevTasks.indexOf(dragTask)
    const hoverArrayIndex = prevTasks.indexOf(hoverTask)
    prevTasks[dragArrayIndex] = hoverTask
    prevTasks[hoverArrayIndex] = dragTask
    setTasks(prevTasks)
  }

  const returnItemsForColumn = (columnName) =>
    tasks
      ?.filter((task) => task.status === columnName)
      .map((task, index) => (
        <MovableItem
          dragType={dragType}
          key={task._id}
          id={task._id}
          title={task.title}
          onDelete={() => setisDeleteOpen({ status: true, id: task._id })}
          onClick={() => {
            fetchTask(task._id)
            setisDetailOpen(true)
          }}
          currentColumnName={task.status}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ))

  return (
    <div>
      <TabMain onClick={onClick} dragType={dragType} returnItemsForColumn={returnItemsForColumn} />
    </div>
  )
}

MainContent.propTypes = {}

export default MainContent
