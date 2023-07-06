import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { payloadCreator } from '../../../utils/utils'
import manageTaskApi from '../../../apis/manage_task'

export const addTask = createAsyncThunk('task/addTask', payloadCreator(manageTaskApi.addTask))

export const getTasks = createAsyncThunk('task/getTasks', payloadCreator(manageTaskApi.getTasks))

export const getUserDetail = createAsyncThunk('task/getUserDetail', payloadCreator(manageTaskApi.getTaskDetail))

export const updateUser = createAsyncThunk('task/updateUser', payloadCreator(manageTaskApi.updateTask))

export const deleteUser = createAsyncThunk('task/deleteUser', payloadCreator(manageTaskApi.deleteTask))

const manage_task = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    taskDetail: {}
  },
  extraReducers: {
    [getTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload
    },
    [getUserDetail.fulfilled]: (state, action) => {
      state.taskDetail = action.payload
    }
  }
})

const manageTaskReducer = manage_task.reducer
export default manageTaskReducer
