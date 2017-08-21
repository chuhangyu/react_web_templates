const apiPath = {
  getStudents: 'web/student/get/students', //获取该教师名下的学生
  getStudentsDetail: 'web/student/get/studentinfo', //获取某个学生的基本信息
  taskSearchMenu: 'web/task/taskSearchMenu', //获取任务搜索导航树
  taskAdd: 'web/task/add', //新增一条任务
  taskEdit: 'web/task/edit', //'编辑任务'
  getdistributelist: 'web/task/getdistributelist', //获取任务分配列表
  dodistributetask: 'web/task/dodistributetask', //任务分配
  systemtasks: 'web/task/get/systemtasks', //任务列表
  mytask: 'web/task/get/mytasks', //我的任务
  saveMessage: 'web/teacher/insert/message', //保存聊天记录
  getMessage: 'web/teacher/get/messages', //获取聊天记录
  getRadarScore: 'web/student/get/studentscore', //获取学生详情雷达图
  getTestInfo: 'web/student/get/testlist', //获取学生测评资料
  searchStudents: 'web/student/searchstudent', //教师搜索学生
  addStudents: 'web/student/addstudent', //教师添加学生
  getStudentTask: 'web/student/get/studenttask', //获取学生的任务列表
  showServiceInfo: 'web/teacher/service', //显示教师服务信息
  getConsumeList: 'web/teacher/detail', //获取教师的服务明细
  reviseName: 'web/teacher/reviseName', //个人信息修改名字
  revisePassword: 'web/teacher/revisePwd', //个人信息修改密码
  login: 'web/teacher/login', //用户登录
  getTaskDetail: 'web/student/get/taskdetail', //获取任务详情
  cancelTask: 'web/student/get/canceltask', //教师取消学生任务
  getCheckInfo: 'web/student/get/certdate', //获取任务审核资料
  operateTask: 'web/student/task/operation', //审核中和已完成任务的通过 不通过 重做
  delMyTask: 'web/task/del', //删除我的任务
  updateImg: 'web/task/send/file', //图片上传
  updateMessages: 'web/teacher/update/messages', //更新聊天消息
  jpushMessage:'web/push/msg',//推送聊天消息
}

export default apiPath;