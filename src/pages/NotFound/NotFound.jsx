import React, { useState, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ColumnTest from './Draggable/Column'
import MovableItem from './Draggable/MovableItem/MovableItem'
import DetailTaskModal from '../../components/UI/Modal/DetailTaskModal/DetailTaskModal'
import DeleteModal from '../../components/UI/Modal/DeleteModal/DeleteModal'
export default function NotFound({ tasks, loading, fetchTasks, error, fetchTask, setTasks }) {
  useEffect(() => {
    // fetchTasks()
  }, [])

  const [isDeleteOpen, setisDeleteOpen] = useState({
    status: false,
    id: ''
  })
  const [isDetailOpen, setisDetailOpen] = useState(false)

  const dragType = 'Drag type'

  if (loading) {
    return <Spinner />
  }

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
      <DndProvider backend={HTML5Backend}>
        <ColumnTest status={false} columntitle='Do it' dragType={dragType}>
          {returnItemsForColumn(false)}
        </ColumnTest>

        <ColumnTest status ColumnTesttitle='Done' dragType={dragType}>
          {returnItemsForColumn(true)}
        </ColumnTest>
      </DndProvider>
      <DetailTaskModal open={isDetailOpen} handleClose={() => setisDetailOpen(false)} />
      <DeleteModal open={isDeleteOpen} handleClose={() => setisDeleteOpen({ status: false, id: '' })} />
    </div>
  )
}
