// stores/counter.js
import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/manage/index'

export const projectInfoStore = defineStore('projectInfo', {
  state: () => ({
    tableData: [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // 类型将自动推断为 number
    nextId: 0,
  }),
  // 也可以这样定义
  // state: () => ({ count: 0 })
  getters: {
    getData(state) {
      return state.tableData
    }
  },
  actions: {
    setData(data: any) {
      this.tableData = data
    }
  },
})