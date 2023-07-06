import http from '../../utils/http'

const URL = 'tasks'

const manageTaskApi = {
  addTask(config) {
    return http.post(`${URL}/`, config)
  },
  getTasks(config) {
    return http.get(`${URL}/`, config)
  },
  getTaskDetail(config) {
    return http.get(`${URL}/getTask/:id`, config)
  },
  updateTask(data, config) {
    return http.put(`${URL}/:id`, data, config)
  },
  deleteTask(data) {
    return http.delete(`${URL}/:id`, data)
  }
}
export default manageTaskApi
