(function () {
  const todos = [
    {
      id:'1',
      title: '吃饭',
      done: true
    },
    {
      id:'2',
      title: '睡觉',
      done: false
    },
    {
      id:'3',
      title: '打豆豆',
      done: true
    }
  ]
    new Vue ({
      el:'#todoapp',
      data:{ 
        todos,
        inputText:'',
        currentEdit: null,
        backTitle:null
      },
      methods:{
        // 添加操作
        addTodo(e){
          // 拿到文本框数据
          const {inputText,todos}= this
          // 非空校验
          if(this.inputText.trim().length===0){
            return
          }
          // 处理id值是唯一的
          const lastItem = todos[todos.length-1].id
          const id = lastItem ? lastItem.id + 1 : 1
          // 添加数据到数组中
            this.todos.push({
              id,
              title:this.inputText,
              done:false
         })
          // 清空文本框
            this.inputText =""
        },
        // 删除操作
        removeTodo(index){
          this.todos.splice(index,1)
        },
        // 编辑操作
        getEditing (item) {
          // 将currentedit赋值为当前双击的任务项
          this.currentEdit = item
          // 备份一份title用于取消编辑
          this.backTitle = item.title
        },
        // 回车失去焦点进行编辑
        saveEdit (item,index) {
          // console.log("jdi")
          // 判断当前编辑的任务是否为空,如果为空直接删除，如果不为空保存编辑去除样式
          if(item.title.trim().length===0){
            // 执行删除操作
            this.todos.splice(index, 1)
          }else{
            this.currentEdit =null
          }
        },
        // 取消编辑
        // 注意点 取消编辑时 同时也失去焦点了，触发了失焦事件

        cancelEdit(){
          // 让任务项的title回归原始数据
          this.currentEdit.title = this.backTitle
          // 去除编辑样式
          this.currentEdit = null

        }
      }
    })
})()
