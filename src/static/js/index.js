import Hand from '../../components/hand'
import Lev from  '../../components/lev'
import Point from  '../../components/point'
import School  from  '../../components/school'
import Workplan from  '../../components/workplan'
import  Management  from  '../../components/management'
import  Attendance from  '../../components/attendance'
import  Customermanagement from  '../../components/customermanagement'
import First from '../../components/first';
let  list = [
    {name:'首页',path:'/index/first',component:First},
    {name:'员工管理',path:'/index/yggl',component:Management},
    {name:'员工考勤',path:'/index/ygkq',component:Attendance},
    {name:'工作计划',path:'/index/gzjh',component:Workplan},
    {name:'客户管理',path:'/index/khgl',component:Customermanagement},
    {name:'亚太学院',path:'/index/ytxy',component:School},
    {name:'级别考核',path:'/index/jbkh',component:Lev},
    {name:'管理助手',path:'/index/glzs',component:Hand},
    {name:'积分管理',path:'/index/jfgl',component:Point}
  ];
  export default  list;